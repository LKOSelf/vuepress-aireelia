import { CodeTabs } from "C:/Users/test-0513/Desktop/bolg/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_4bcd1f20f1aafdba24fcb8691aabb334/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/test-0513/Desktop/bolg/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_4bcd1f20f1aafdba24fcb8691aabb334/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/test-0513/Desktop/bolg/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_4bcd1f20f1aafdba24fcb8691aabb334/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
