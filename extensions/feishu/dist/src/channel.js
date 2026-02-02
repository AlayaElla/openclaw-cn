import { feishuOutbound, normalizeFeishuTarget, resolveFeishuAccount, listFeishuAccountIds, resolveDefaultFeishuAccountId, getChatChannelMeta, buildChannelConfigSchema, DEFAULT_ACCOUNT_ID, probeFeishu, monitorFeishuProvider, } from "openclaw/plugin-sdk";
import { feishuOnboardingAdapter } from "./onboarding.js";
import { FeishuAccountSchema } from "./config-schema.js";
const meta = getChatChannelMeta("feishu");
export const feishuPlugin = {
    id: "feishu",
    meta: {
        ...meta,
        quickstartAllowFrom: true,
    },
    capabilities: {
        chatTypes: ["direct", "group"],
        media: true,
    },
    onboarding: feishuOnboardingAdapter,
    outbound: feishuOutbound,
    messaging: {
        normalizeTarget: normalizeFeishuTarget,
    },
    configSchema: buildChannelConfigSchema(FeishuAccountSchema),
    config: {
        listAccountIds: (cfg) => listFeishuAccountIds(cfg),
        resolveAccount: (cfg, accountId) => resolveFeishuAccount({ cfg, accountId: accountId ?? undefined }),
        defaultAccountId: (cfg) => resolveDefaultFeishuAccountId(cfg),
        isConfigured: (account) => account.tokenSource !== "none",
    },
    status: {
        defaultRuntime: {
            accountId: DEFAULT_ACCOUNT_ID,
            running: false,
            lastStartAt: null,
            lastStopAt: null,
            lastError: null,
        },
        collectStatusIssues: () => [],
        buildChannelSummary: async ({ snapshot }) => ({
            configured: snapshot.configured ?? false,
            tokenSource: snapshot.tokenSource ?? "none",
            running: snapshot.running ?? false,
            lastStartAt: snapshot.lastStartAt ?? null,
            lastStopAt: snapshot.lastStopAt ?? null,
            lastError: snapshot.lastError ?? null,
            probe: snapshot.probe,
            lastProbeAt: snapshot.lastProbeAt ?? null,
        }),
        probeAccount: async ({ account, timeoutMs }) => {
            const config = account.config;
            return probeFeishu(config.appId, config.appSecret, timeoutMs);
        },
        buildAccountSnapshot: ({ account, runtime, probe }) => {
            const configured = Boolean(account.config.appId && account.config.appSecret);
            return {
                accountId: account.accountId,
                name: account.name,
                enabled: account.enabled,
                configured,
                tokenSource: account.tokenSource,
                running: runtime?.running ?? false,
                lastStartAt: runtime?.lastStartAt ?? null,
                lastStopAt: runtime?.lastStopAt ?? null,
                lastError: runtime?.lastError ?? null,
                probe,
                lastInboundAt: runtime?.lastInboundAt ?? null,
                lastOutboundAt: runtime?.lastOutboundAt ?? null,
            };
        },
        logSelfId: ({ account, runtime }) => {
            const appId = account.config.appId;
            if (appId) {
                runtime.log?.(`feishu:${appId}`);
            }
        },
    },
    gateway: {
        startAccount: async (ctx) => {
            const { account, log, setStatus, abortSignal, cfg, runtime } = ctx;
            const config = account.config;
            // Probe first to verify credentials
            let feishuBotLabel = "";
            try {
                const probe = await probeFeishu(config.appId, config.appSecret, 5000);
                if (probe.ok && probe.bot?.appName) {
                    feishuBotLabel = ` (${probe.bot.appName})`;
                }
            }
            catch (err) {
                log?.debug?.(`[${account.accountId}] bot probe failed: ${String(err)}`);
            }
            log?.info(`[${account.accountId}] starting Feishu provider${feishuBotLabel}`);
            setStatus({
                accountId: account.accountId,
                running: true,
                lastStartAt: Date.now(),
            });
            try {
                await monitorFeishuProvider({
                    appId: config.appId,
                    appSecret: config.appSecret,
                    accountId: account.accountId,
                    config: cfg,
                    runtime,
                    abortSignal,
                });
            }
            catch (err) {
                setStatus({
                    accountId: account.accountId,
                    running: false,
                    lastError: err instanceof Error ? err.message : String(err),
                });
                throw err;
            }
        },
    },
};
//# sourceMappingURL=channel.js.map