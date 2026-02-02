/**
 * Feishu Streaming Card Support
 *
 * Implements typing indicator and streaming text output for Feishu using
 * the Card Kit streaming API.
 *
 * Flow:
 * 1. Create a card entity with streaming_mode: true
 * 2. Send the card as a message (shows "[生成中...]" in chat preview)
 * 3. Stream text updates to the card using the cardkit API
 * 4. Close streaming mode when done
 */

import type { Client } from "@larksuiteoapi/node-sdk";
import { getChildLogger } from "../logging.js";

const logger = getChildLogger({ module: "feishu-streaming" });

const FEISHU_BASE_URL = "https://open.feishu.cn/open-apis";

export type FeishuStreamingCardState = {
  cardId: string;
  messageId: string;
  sequence: number;
  elementId: string;
  currentText: string;
};

/**
 * Create a streaming card entity
 */
export async function createStreamingCard(
  client: Client,
  title: string = "正在思考...",
): Promise<{ cardId: string }> {
  const cardJson = {
    schema: "2.0",
    header: {
      title: {
        content: title,
        tag: "plain_text",
      },
    },
    config: {
      streaming_mode: true,
      summary: {
        content: "[生成中...]",
      },
      streaming_config: {
        print_frequency_ms: { default: 50 },
        print_step: { default: 2 },
        print_strategy: "fast",
      },
    },
    body: {
      elements: [
        {
          tag: "markdown",
          content: "⏳ 正在处理您的请求...",
          element_id: "streaming_content",
        },
      ],
    },
  };

  const response = await fetch(`${FEISHU_BASE_URL}/cardkit/v1/cards`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${await getTenantAccessToken(client)}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "card_json",
      data: JSON.stringify(cardJson),
    }),
  });

  const result = (await response.json()) as {
    code: number;
    msg: string;
    data?: { card_id: string };
  };

  if (result.code !== 0 || !result.data?.card_id) {
    throw new Error(`Failed to create streaming card: ${result.msg}`);
  }

  logger.debug(`Created streaming card: ${result.data.card_id}`);
  return { cardId: result.data.card_id };
}

/**
 * Send a streaming card as a message
 */
export async function sendStreamingCard(
  client: Client,
  receiveId: string,
  cardId: string,
  receiveIdType: "open_id" | "user_id" | "union_id" | "email" | "chat_id" = "chat_id",
): Promise<{ messageId: string }> {
  const content = JSON.stringify({
    type: "card",
    data: { card_id: cardId },
  });

  const res = await client.im.message.create({
    params: { receive_id_type: receiveIdType },
    data: {
      receive_id: receiveId,
      msg_type: "interactive",
      content,
    },
  });

  if (res.code !== 0 || !res.data?.message_id) {
    throw new Error(`Failed to send streaming card: ${res.msg}`);
  }

  logger.debug(`Sent streaming card message: ${res.data.message_id}`);
  return { messageId: res.data.message_id };
}

/**
 * Update streaming card text content
 */
export async function updateStreamingCardText(
  client: Client,
  cardId: string,
  elementId: string,
  text: string,
  sequence: number,
): Promise<void> {
  const response = await fetch(
    `${FEISHU_BASE_URL}/cardkit/v1/cards/${cardId}/elements/${elementId}/content`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${await getTenantAccessToken(client)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: text,
        sequence,
        uuid: `stream_${cardId}_${sequence}`,
      }),
    },
  );

  const result = (await response.json()) as { code: number; msg: string };

  if (result.code !== 0) {
    logger.warn(`Failed to update streaming card text: ${result.msg}`);
    // Don't throw - streaming updates can fail occasionally
  }
}

/**
 * Close streaming mode on a card
 */
export async function closeStreamingMode(
  client: Client,
  cardId: string,
  sequence: number,
  finalSummary?: string,
): Promise<void> {
  const configObj: Record<string, unknown> = {
    streaming_mode: false,
  };

  if (finalSummary) {
    configObj.summary = { content: finalSummary };
  }

  const settings = { config: configObj };

  const response = await fetch(`${FEISHU_BASE_URL}/cardkit/v1/cards/${cardId}/settings`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${await getTenantAccessToken(client)}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      settings: JSON.stringify(settings),
      sequence,
      uuid: `close_${cardId}_${sequence}`,
    }),
  });

  const result = (await response.json()) as { code: number; msg: string };

  if (result.code !== 0) {
    logger.warn(`Failed to close streaming mode: ${result.msg}`);
  } else {
    logger.debug(`Closed streaming mode for card: ${cardId}`);
  }
}

/**
 * Helper to get tenant access token from the client
 * The SDK caches this internally, but we need it for direct API calls
 */
async function getTenantAccessToken(client: Client): Promise<string> {
  // The SDK's tokenManager handles token refresh automatically
  // We can access it through the client's internal state
  const tokenManager = (client as any).tokenManager;
  if (tokenManager?.tenantAccessToken) {
    const token = await tokenManager.tenantAccessToken;
    if (typeof token === "string") return token;
  }

  // Fallback: use the client's internal config to get a fresh token
  const config = (client as any).config;
  if (!config?.appId || !config?.appSecret) {
    throw new Error("Cannot get tenant access token: missing app credentials");
  }

  const response = await fetch(`${FEISHU_BASE_URL}/auth/v3/tenant_access_token/internal`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      app_id: config.appId,
      app_secret: config.appSecret,
    }),
  });

  const result = (await response.json()) as {
    code: number;
    msg: string;
    tenant_access_token?: string;
  };

  if (result.code !== 0 || !result.tenant_access_token) {
    throw new Error(`Failed to get tenant access token: ${result.msg}`);
  }

  return result.tenant_access_token;
}

/**
 * High-level streaming card manager
 */
export class FeishuStreamingSession {
  private client: Client;
  private state: FeishuStreamingCardState | null = null;
  private updateQueue: Promise<void> = Promise.resolve();
  private closed = false;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Start a streaming session - creates and sends a streaming card
   */
  async start(
    receiveId: string,
    receiveIdType: "open_id" | "user_id" | "union_id" | "email" | "chat_id" = "chat_id",
    title?: string,
  ): Promise<void> {
    if (this.state) {
      logger.warn("Streaming session already started");
      return;
    }

    try {
      const { cardId } = await createStreamingCard(this.client, title);
      const { messageId } = await sendStreamingCard(this.client, receiveId, cardId, receiveIdType);

      this.state = {
        cardId,
        messageId,
        sequence: 1,
        elementId: "streaming_content",
        currentText: "",
      };

      logger.info(`Started streaming session: cardId=${cardId}, messageId=${messageId}`);
    } catch (err) {
      logger.error(`Failed to start streaming session: ${String(err)}`);
      throw err;
    }
  }

  /**
   * Update the streaming card with new text (appends to existing)
   */
  async update(text: string): Promise<void> {
    if (!this.state || this.closed) return;

    // Queue updates to ensure order
    this.updateQueue = this.updateQueue.then(async () => {
      if (!this.state || this.closed) return;

      this.state.currentText = text;
      this.state.sequence += 1;

      try {
        await updateStreamingCardText(
          this.client,
          this.state.cardId,
          this.state.elementId,
          text,
          this.state.sequence,
        );
      } catch (err) {
        logger.debug(`Streaming update failed (will retry): ${String(err)}`);
      }
    });

    await this.updateQueue;
  }

  /**
   * Finalize and close the streaming session
   */
  async close(finalText?: string, summary?: string): Promise<void> {
    if (!this.state || this.closed) return;
    this.closed = true;

    // Wait for pending updates
    await this.updateQueue;

    const text = finalText ?? this.state.currentText;
    this.state.sequence += 1;

    try {
      // Update final text
      if (text) {
        await updateStreamingCardText(
          this.client,
          this.state.cardId,
          this.state.elementId,
          text,
          this.state.sequence,
        );
      }

      // Close streaming mode
      this.state.sequence += 1;
      await closeStreamingMode(
        this.client,
        this.state.cardId,
        this.state.sequence,
        summary ?? truncateForSummary(text),
      );

      logger.info(`Closed streaming session: cardId=${this.state.cardId}`);
    } catch (err) {
      logger.error(`Failed to close streaming session: ${String(err)}`);
    }
  }

  /**
   * Check if session is active
   */
  isActive(): boolean {
    return this.state !== null && !this.closed;
  }

  /**
   * Get the message ID of the streaming card
   */
  getMessageId(): string | null {
    return this.state?.messageId ?? null;
  }
}

/**
 * Truncate text to create a summary for chat preview
 */
function truncateForSummary(text: string, maxLength: number = 50): string {
  if (!text) return "";
  const cleaned = text.replace(/\n/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.slice(0, maxLength - 3) + "...";
}
