// @ts-ignore - dynamic import resolution
import { emptyPluginConfigSchema } from "openclaw/plugin-sdk";
import { feishuPlugin } from "./src/channel.js";
import { setFeishuRuntime } from "./src/runtime.js";
const plugin = {
    id: "feishu",
    name: "Feishu",
    description: "Feishu (Larksuite) channel plugin",
    configSchema: emptyPluginConfigSchema(),
    register(api) {
        setFeishuRuntime(api.runtime);
        api.registerChannel({ plugin: feishuPlugin });
    },
};
export default plugin;
//# sourceMappingURL=index.js.map