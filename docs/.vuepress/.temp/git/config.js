import { GitContributors } from "C:/Users/test-0513/Desktop/bolg/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_542bf5f11d9355809eb4f3f1fcd120a9/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/test-0513/Desktop/bolg/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_542bf5f11d9355809eb4f3f1fcd120a9/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
