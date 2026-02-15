---
summary: "选择心跳和定时任务进行自动化的指导"
read_when:
  - 决定如何安排重复任务
  - 设置后台监控或通知
  - 优化周期性检查的令牌使用
---
# 定时任务 vs 心跳：何时使用哪种

心跳和定时任务都让您按计划运行任务。本指南帮助您为您的用例选择正确的机制。

## 快速决策指南

| 用例 | 推荐 | 原因 |
|------|------|------|
| 每30分钟检查收件箱 | 心跳 | 与其他检查批处理，上下文感知 |
| 准确在上午9点发送日报 | 定时任务（独立） | 需要精确时间 |
| 监控日历中的即将到来的事件 | 心跳 | 周期性意识的自然选择 |
| 运行每周深度分析 | 定时任务（独立） | 独立任务，可以使用不同模型 |
| 20分钟后提醒我 | 定时任务（主会话，`--at`） | 精确定时的一次性任务 |
| 后台项目健康检查 | 心跳 | 搭载现有周期 |

## 心跳：周期性意识

心跳在 **主会话** 中以固定间隔运行（默认：30分钟）。它们旨在让代理检查事物并突出任何重要的内容。

### 何时使用心跳

- **多个周期性检查**：单个心跳可以批处理所有这些，而不是5个单独的定时任务检查收件箱、日历、天气、通知和项目状态。
- **上下文感知决策**：代理拥有完整的主会话上下文，因此可以智能地决定什么是紧急的，什么可以等待。
- **对话连续性**：心跳运行共享同一会话，因此代理记得最近的对话并可以自然地跟进。
- **低开销监控**：一个心跳替换许多小的轮询任务。

### 心跳优势

- **批处理多个检查**：一次代理回合可以一起审查收件箱、日历和通知。
- **减少API调用**：单个心跳比5个独立定时任务更便宜。
- **上下文感知**：代理知道您一直在做什么，并可以相应地优先处理。
- **智能抑制**：如果没有什么需要注意的，代理回复 `HEARTBEAT_OK` 并且不发送消息。
- **自然时间**：根据队列负载稍微漂移，这对大多数监控来说是可以的。

### 心跳示例：HEARTBEAT.md 检查清单

```md
# Heartbeat checklist

- Check email for urgent messages
- Review calendar for events in next 2 hours
- If a background task finished, summarize results
- If idle for 8+ hours, send a brief check-in
```

代理在每次心跳时读取此内容并在一个回合中处理所有项目。

### 配置心跳

```json5
{
  agents: {
    defaults: {
      heartbeat: {
        every: "30m",        // interval
        target: "last",      // where to deliver alerts
        activeHours: { start: "08:00", end: "22:00" }  // optional
      }
    }
  }
}
```

有关完整配置，请参见 [心跳](/gateway/heartbeat)。

## 定时任务：精确调度

定时任务在 **确切时间** 运行，可以在独立会话中运行而不影响主上下文。

### 何时使用定时任务

- **需要精确时间**："每个周一上午9:00发送这个"（不是"大约9点左右"）。
- **独立任务**：不需要对话上下文的任务。
- **不同的模型/思考**：值得使用更强大模型的重度分析。
- **一次性提醒**：使用 `--at` 的 "20分钟后提醒我"。
- **嘈杂/频繁任务**：会使主会话历史混乱的任务。
- **外部触发器**：应该独立于代理是否其他活跃而运行的任务。

### 定时任务优势

- **精确时间**：支持时区的5字段cron表达式。
- **会话隔离**：在 `cron:<jobId>` 中运行而不污染主历史。
- **模型覆盖**：每个任务使用更便宜或更强大的模型。
- **发送控制**：可以直接发送到频道；默认仍向主会话发布摘要（可配置）。
- **无需代理上下文**：即使主会话空闲或压缩也能运行。
- **一次性支持**：`--at` 用于精确的未来时间戳。

### 定时任务示例：每日晨间简报

```bash
openclaw-cn cron add \
  --name "Morning briefing" \
  --cron "0 7 * * *" \
  --tz "America/New_York" \
  --session isolated \
  --message "Generate today's briefing: weather, calendar, top emails, news summary." \
  --model opus \
  --deliver \
  --channel whatsapp \
  --to "+15551234567"
```

这在纽约时间恰好7:00 AM运行，使用Opus保证质量，并直接发送到WhatsApp。

### 定时任务示例：一次性提醒

```bash
openclaw-cn cron add \
  --name "Meeting reminder" \
  --at "20m" \
  --session main \
  --system-event "Reminder: standup meeting starts in 10 minutes." \
  --wake now \
  --delete-after-run
```

有关完整的CLI参考，请参见 [定时任务](/automation/cron-jobs)。

## 决策流程图

```
任务需要在确切时间运行吗？
  是 -> 使用定时任务
  否 -> 继续...

任务需要与主会话隔离吗？
  是 -> 使用定时任务（独立）
  否 -> 继续...

此任务可以与其他周期性检查批处理吗？
  是 -> 使用心跳（添加到HEARTBEAT.md）
  否 -> 使用定时任务

这是一次性提醒吗？
  是 -> 使用带--at的定时任务
  否 -> 继续...

它需要不同的模型或思考级别吗？
  是 -> 使用带--model/--thinking的定时任务（独立）
  否 -> 使用心跳
```

## 结合两者

最高效的设置使用 **两者**：

1. **心跳** 每30分钟在一个批处理回合中处理常规监控（收件箱、日历、通知）。
2. **定时任务** 处理精确计划（日报、周评）和一次性提醒。

### 示例：高效的自动化设置

**HEARTBEAT.md**（每30分钟检查）：
```md
# 心跳检查清单
- 扫描收件箱中的紧急邮件
- 检查日历中接下来2小时的事件
- 审查任何待处理任务
- 如果安静超过8小时进行轻量检查
```

**定时任务**（精确时间）：
```bash
# 每天早上7点的晨间简报
openclaw-cn cron add --name "晨间简报" --cron "0 7 * * *" --session isolated --message "..." --deliver

# 每周一上午9点的每周项目回顾
openclaw-cn cron add --name "每周回顾" --cron "0 9 * * 1" --session isolated --message "..." --model opus

# 一次性提醒
openclaw-cn cron add --name "回电" --at "2h" --session main --system-event "给客户回电" --wake now
```


## Lobster：带审批的确定性工作流

Lobster 是 **多步骤工具管道** 的工作流运行时，需要确定性执行和明确审批。
当任务不仅仅是单个代理回合，并且您想要带有人工检查点的可恢复工作流时使用它。

### 何时适合使用Lobster

- **多步骤自动化**：您需要固定的工具调用管道，而不是一次性提示。
- **审批门**：副作用应该暂停直到您批准，然后恢复。
- **可恢复运行**：继续暂停的工作流而不重新运行早期步骤。

### 它如何与心跳和定时任务配合

- **心跳/定时任务** 决定运行发生的 *时机*。
- **Lobster** 定义运行开始后发生 *哪些步骤*。

对于计划的工作流，使用定时任务或心跳触发调用Lobster的代理回合。
对于临时工作流，直接调用Lobster。

### 操作说明（来自代码）

- Lobster 作为 **本地子进程**（`lobster` CLI）在工具模式下运行并返回 **JSON封装**。
- 如果工具返回 `needs_approval`，您可以使用 `resumeToken` 和 `approve` 标志恢复。
- 该工具是 **可选插件**；您必须在 `tools.allow` 中允许 `lobster`。
- 如果您传递 `lobsterPath`，它必须是 **绝对路径**。

有关完整用法和示例，请参见 [Lobster](/tools/lobster)。

## 主会话 vs 独立会话

心跳和定时任务都可以与主会话交互，但方式不同：

| | 心跳 | 定时任务（主会话） | 定时任务（独立） |
|---|---|---|---|
| 会话 | 主会话 | 主会话（通过系统事件） | `cron:<jobId>` |
| 历史 | 共享 | 共享 | 每次运行都是新的 |
| 上下文 | 完整 | 完整 | 无（从头开始） |
| 模型 | 主会话模型 | 主会话模型 | 可以覆盖 |
| 输出 | 如果不是 `HEARTBEAT_OK` 则发送 | 心跳提示 + 事件 | 摘要发布到主会话 |

### 何时使用主会话定时任务

当您想要以下情况时，使用 `--session main` 和 `--system-event`：
- 提醒/事件出现在主会话上下文中
- 代理在下次心跳时用完整上下文处理它
- 没有单独的独立运行

```bash
openclaw-cn cron add \
  --name "Check project" \
  --every "4h" \
  --session main \
  --system-event "Time for a project health check" \
  --wake now
```

### 何时使用独立定时任务

当您想要以下情况时，使用 `--session isolated`：
- 没有先前上下文的干净开端
- 不同的模型或思考设置
- 输出直接发送到频道（摘要默认仍发布到主会话）
- 不会使主会话混乱的历史

```bash
openclaw-cn cron add \
  --name "Deep analysis" \
  --cron "0 6 * * 0" \
  --session isolated \
  --message "Weekly codebase analysis..." \
  --model opus \
  --thinking high \
  --deliver
```

## 成本考虑

| 机制 | 成本概况 |
|--------|----------|
| 心跳 | 每N分钟一次回合；随HEARTBEAT.md大小扩展 |
| 定时任务（主会话） | 向下次心跳添加事件（无独立回合） |
| 定时任务（独立） | 每个任务的完整代理回合；可以使用更便宜的模型 |

**提示**：
- 保持 `HEARTBEAT.md` 小巧以最小化令牌开销。
- 将类似检查批处理到心跳中，而不是多个定时任务。
- 如果您只想要内部处理，在心跳上使用 `target: "none"`。
- 对于例行任务，使用带更便宜模型的独立定时任务。

## 相关

- [心跳](/gateway/heartbeat) - 完整心跳配置
- [定时任务](/automation/cron-jobs) - 完整定时任务CLI和API参考
- [系统](/cli/system) - 系统事件 + 心跳控制
