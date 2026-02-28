import type { StreamFn } from "@mariozechner/pi-agent-core";
import type { SimpleStreamOptions } from "@mariozechner/pi-ai";
import { streamSimple } from "@mariozechner/pi-ai";
import type { ClawdbotConfig } from "../../config/config.js";
import { log } from "./logger.js";

/**
 * Resolve provider-specific extra params from model config.
 * Used to pass through stream params like temperature/maxTokens.
 *
 * @internal Exported for testing only
 */
export function resolveExtraParams(params: {
  cfg: ClawdbotConfig | undefined;
  provider: string;
  modelId: string;
}): Record<string, unknown> | undefined {
  const modelKey = `${params.provider}/${params.modelId}`;
  const modelConfig = params.cfg?.agents?.defaults?.models?.[modelKey];
  return modelConfig?.params ? { ...modelConfig.params } : undefined;
}

type CacheRetention = "none" | "short" | "long";

/**
 * Resolve cacheRetention from extraParams, supporting both new `cacheRetention`
 * and legacy `cacheControlTtl` values for backwards compatibility.
 *
 * Mapping: "5m" → "short", "1h" → "long"
 *
 * Only applies to Anthropic provider (OpenRouter uses openai-completions API
 * with hardcoded cache_control, not the cacheRetention stream option).
 */
function resolveCacheRetention(
  extraParams: Record<string, unknown> | undefined,
  provider: string,
): CacheRetention | undefined {
  if (provider !== "anthropic") {
    return undefined;
  }

  // Prefer new cacheRetention if present
  const newVal = extraParams?.cacheRetention;
  if (newVal === "none" || newVal === "short" || newVal === "long") {
    return newVal;
  }

  // Fall back to legacy cacheControlTtl with mapping
  const legacy = extraParams?.cacheControlTtl;
  if (legacy === "5m") {
    return "short";
  }
  if (legacy === "1h") {
    return "long";
  }
  return undefined;
}

function createStreamFnWithExtraParams(
  baseStreamFn: StreamFn | undefined,
  extraParams: Record<string, unknown> | undefined,
  provider: string,
): StreamFn | undefined {
  if (!extraParams || Object.keys(extraParams).length === 0) {
    return undefined;
  }

  const streamParams: Partial<SimpleStreamOptions> = {};
  if (typeof extraParams.temperature === "number") {
    streamParams.temperature = extraParams.temperature;
  }
  if (typeof extraParams.maxTokens === "number") {
    streamParams.maxTokens = extraParams.maxTokens;
  }
  const cacheRetention = resolveCacheRetention(extraParams, provider);
  if (cacheRetention) {
    // @ts-ignore -- cherry-pick upstream type mismatch
    // @ts-ignore -- cherry-pick upstream type mismatch
    streamParams.cacheRetention = cacheRetention;
  }

  if (Object.keys(streamParams).length === 0) {
    return undefined;
  }

  log.debug(`creating streamFn wrapper with params: ${JSON.stringify(streamParams)}`);

  const underlying = baseStreamFn ?? streamSimple;
  const wrappedStreamFn: StreamFn = (model, context, options) =>
    underlying(model, context, {
      ...streamParams,
      ...options,
    });

  return wrappedStreamFn;
}

/**
 * Check if a provider is a DashScope-compatible provider.
 */
function isDashScopeProvider(provider: string): boolean {
  return provider === "dashscope" || provider === "dashscope-coding-plan" || provider === "bailian";
}

/**
 * Wrap a streamFn to inject `enable_thinking: true` for DashScope reasoning models.
 *
 * DashScope (Alibaba Cloud Bailian) requires `enable_thinking: true` in the
 * request body to enable deep reasoning. The pi-ai library's openai-completions
 * provider already handles `reasoning_content` in streaming responses, but does
 * not send the `enable_thinking` parameter. This wrapper injects it via the
 * `onPayload` callback, which is called with the params object before the
 * request is sent.
 */
function createDashScopeReasoningStreamFn(baseStreamFn: any, provider: string): any {
  if (!isDashScopeProvider(provider)) {
    return undefined;
  }

  log.debug(`creating DashScope reasoning streamFn wrapper for ${provider}`);

  const wrappedStreamFn = (model: any, context: any, options: any) => {
    // Only inject enable_thinking when the model supports reasoning
    const modelAny = model as { reasoning?: boolean };
    if (!modelAny.reasoning) {
      return baseStreamFn(model, context, options);
    }

    const originalOnPayload = options?.onPayload;
    const onPayload = (payload: unknown) => {
      // Inject enable_thinking into the request params
      if (payload && typeof payload === "object") {
        const payloadObj = payload as Record<string, unknown>;
        payloadObj.enable_thinking = true;

        // Map 'developer' role back to 'system' for DashScope compatibility
        if (Array.isArray(payloadObj.messages)) {
          for (const msg of payloadObj.messages) {
            if (msg && typeof msg === "object" && msg.role === "developer") {
              msg.role = "system";
            }
          }
        }
      }
      originalOnPayload?.(payload);
    };

    return baseStreamFn(model, context, {
      ...options,
      onPayload,
    });
  };

  return wrappedStreamFn;
}

/**
 * Apply extra params (like temperature) to an agent's streamFn.
 *
 * @internal Exported for testing
 */
export function applyExtraParamsToAgent(
  agent: { streamFn?: StreamFn },
  cfg: ClawdbotConfig | undefined,
  provider: string,
  modelId: string,
  extraParamsOverride?: Record<string, unknown>,
): void {
  const extraParams = resolveExtraParams({
    cfg,
    provider,
    modelId,
  });
  const override =
    extraParamsOverride && Object.keys(extraParamsOverride).length > 0
      ? Object.fromEntries(
          Object.entries(extraParamsOverride).filter(([, value]) => value !== undefined),
        )
      : undefined;
  const merged = Object.assign({}, extraParams, override);
  const wrappedStreamFn = createStreamFnWithExtraParams(agent.streamFn, merged, provider);

  if (wrappedStreamFn) {
    log.debug(`applying extraParams to agent streamFn for ${provider}/${modelId}`);
    agent.streamFn = wrappedStreamFn;
  }

  // Apply DashScope-specific reasoning wrapper (enable_thinking injection)
  const dashScopeStreamFn = createDashScopeReasoningStreamFn(
    agent.streamFn ?? streamSimple,
    provider,
  );
  if (dashScopeStreamFn) {
    agent.streamFn = dashScopeStreamFn;
  }
}
