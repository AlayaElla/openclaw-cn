---
summary: "用于唤醒和独立代理运行的 Webhook 入口"
read_when:
  - 添加或更改 webhook 端点
  - 将外部系统连接到 Clawdbot
---

# Webhooks

网关可以暴露一个小型 HTTP webhook 端点用于外部触发器。

## 启用

```json5
{
  hooks: {
    enabled: true,
    token: "shared-secret",
    path: "/hooks"
  }
}
```

注意事项：
- 当 `hooks.enabled=true` 时需要 `hooks.token`。
- `hooks.path` 默认为 `/hooks`。

## 认证

每个请求都必须包含钩子令牌。推荐使用头部：
- `Authorization: Bearer <token>`（推荐）
- `x-clawdbot-token: <token>`
- `?token=<token>`（已弃用；会记录警告并在未来主要版本中移除）

## 端点

### `POST /hooks/wake`

载荷：
```json
{ "text": "系统行", "mode": "now" }
```

- `text` **必需**（字符串）：事件描述（例如，"收到新邮件"）。
- `mode` 可选（`now` | `next-heartbeat`）：是否触发立即心跳（默认 `now`）或等待下次定期检查。

效果：
- 为主会话排队系统事件
- 如果 `mode=now`，触发立即心跳

### `POST /hooks/agent`

载荷：
```json
{
  "message": "运行这个",
  "name": "邮件",
  "sessionKey": "hook:email:msg-123",
  "wakeMode": "now",
  "deliver": true,
  "channel": "last",
  "to": "+15551234567",
  "model": "openai/gpt-5.2-mini",
  "thinking": "low",
  "timeoutSeconds": 120
}
```

- `message` **必需**（字符串）：代理要处理的提示或消息。
- `name` 可选（字符串）：钩子的人类可读名称（例如，"GitHub"），用作会话摘要的前缀。
- `sessionKey` 可选（字符串）：用于标识代理会话的键。默认为随机的 `hook:<uuid>`。使用一致的键允许在钩子上下文中进行多轮对话。
- `wakeMode` 可选（`now` | `next-heartbeat`）：是否触发立即心跳（默认 `now`）或等待下次定期检查。
- `deliver` 可选（布尔值）：如果为 `true`，代理的响应将发送到消息频道。默认为 `true`。仅心跳确认的响应会自动跳过。
- `channel` 可选（字符串）：发送的消息频道。可选值：`last`、`whatsapp`、`telegram`、`discord`、`slack`、`mattermost`（插件）、`signal`、`imessage`、`msteams`。默认为 `last`。
- `to` 可选（字符串）：频道的接收者标识符（例如，WhatsApp/Signal 的电话号码，Telegram 的聊天 ID，Discord/Slack/Mattermost（插件）的频道 ID，MS Teams 的对话 ID）。默认为主会话中的最后接收者。
- `model` 可选（字符串）：模型覆盖（例如，`anthropic/claude-3-5-sonnet` 或别名）。如果受限制，必须在允许的模型列表中。
- `thinking` 可选（字符串）：思考级别覆盖（例如，`low`、`medium`、`high`）。
- `timeoutSeconds` 可选（数字）：代理运行的最大持续时间（秒）。

效果：
- 运行 **独立** 代理回合（自己的会话键）
- 总是在 **主** 会话中发布摘要
- 如果 `wakeMode=now`，触发立即心跳

### `POST /hooks/<name>`（映射）

自定义钩子名称通过 `hooks.mappings` 解析（见配置）。映射可以
将任意载荷转换为 `wake` 或 `agent` 操作，带有可选模板或
代码转换。

映射选项（摘要）：
- `hooks.presets: ["gmail"]` 启用内置的 Gmail 映射。
- `hooks.mappings` 让您在配置中定义 `match`、`action` 和模板。
- `hooks.transformsDir` + `transform.module` 加载 JS/TS 模块用于自定义逻辑。
- 使用 `match.source` 保持通用的摄取端点（载荷驱动路由）。
- TS 转换需要 TS 加载器（例如 `bun` 或 `tsx`）或运行时预编译的 `.js`。
- 在映射上设置 `deliver: true` + `channel`/`to` 将回复路由到聊天界面
  （`channel` 默认为 `last` 并回退到 WhatsApp）。
- `allowUnsafeExternalContent: true` 为该钩子禁用外部内容安全包装器
  （危险；仅适用于受信任的内部来源）。
- `clawdbot webhooks gmail setup` 为 `clawdbot webhooks gmail run` 写入 `hooks.gmail` 配置。
请参阅 [Gmail Pub/Sub](/automation/gmail-pubsub) 了解完整的 Gmail 监控流程。

## 响应

- `200` 用于 `/hooks/wake`
- `202` 用于 `/hooks/agent`（异步运行开始）
- `401` 认证失败
- `400` 无效载荷
- `413` 载荷过大

## 示例

```bash
curl -X POST http://127.0.0.1:18789/hooks/wake \
  -H 'Authorization: Bearer SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"text":"New email received","mode":"now"}'
```

```bash
curl -X POST http://127.0.0.1:18789/hooks/agent \
  -H 'x-clawdbot-token: SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"message":"Summarize inbox","name":"Email","wakeMode":"next-heartbeat"}'
```

### 使用不同模型

在代理载荷（或映射）中添加 `model` 来覆盖该次运行的模型：

```bash
curl -X POST http://127.0.0.1:18789/hooks/agent \
  -H 'x-clawdbot-token: SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"message":"Summarize inbox","name":"Email","model":"openai/gpt-5.2-mini"}'
```

如果您强制执行 `agents.defaults.models`，请确保覆盖模型包含在其中。

```bash
curl -X POST http://127.0.0.1:18789/hooks/gmail \
  -H 'Authorization: Bearer SECRET' \
  -H 'Content-Type: application/json' \
  -d '{"source":"gmail","messages":[{"from":"Ada","subject":"Hello","snippet":"Hi"}]}'
```

## 安全

- 将钩子端点保持在回环地址、尾网或受信任的反向代理后面。
- 使用专用的钩子令牌；不要重用网关认证令牌。
- 避免在 webhook 日志中包含敏感的原始载荷。
- 钩子载荷默认被视为不受信任并用安全边界包装。
  如果您必须为特定钩子禁用此功能，请在该钩子的映射中设置 `allowUnsafeExternalContent: true`
  （危险）。
