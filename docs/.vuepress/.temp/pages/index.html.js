import comp from "C:/Users/test-0513/Desktop/bolg/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"Blog\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"Note\",\"link\":\"/guide/\",\"type\":\"secondary\"},{\"text\":\"GitHub\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"third\"}],\"features\":[{\"title\":\"为什么要写这个“碎碎念”小站？\",\"details\":\"🤯 脑子装不下啦！把乱飞的灵感关进文字牢笼。🛸 外星人交流手册，万一哪天用不上呢？ 🍞 知识面包机，现烤现卖，拒绝过期干货。\"},{\"title\":\"技术宅的快乐水​！\",\"details\":\"IT相关技术。\"},{\"title\":\"讲讲自己\",\"details\":null}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
