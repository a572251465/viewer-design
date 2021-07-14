<template xmlns = "http://www.w3.org/1999/html">
  <div class = "demo-fastStarted">
    <h2>
      快速上手
    </h2>
    <p>本节将介绍如何在项目中使用 Viewer-design。</p>
    <h3>installed</h3>
    <h4>yarn</h4>
    <pre>$ yarn add viewer-design</pre>
    <h4>npm</h4>
    <pre>$ npm install viewer-design</pre>
    <h3>
      引入Viewer-design
    </h3>
    <h4>完整引入</h4>
    <p>在main.ts中引入</p>
    <div class = "pre">
      import { createApp } from 'vue'<br/>
      import ViewerDesign from 'viewer-design'<br/>
      import 'viewer-design/lib/theme-chalk/src/index.scss'><br/>
      const app = createApp(App)<br/>
      app.use(ViewerDesign)<br/>
      app.mount('#app')
    </div>
    <p>
      为了更加好友提示，需要ts扫描文件中配置提示 (demo中配置在main.ts)
    </p>
    <div class = "pre">
      declare module '@vue/runtime-core' { <br/>
      &nbsp;&nbsp;&nbsp;interface ComponentCustomProperties {<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$Message: typeof Message,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$Dialog: ITypeDialog<br/>
      &nbsp;&nbsp;&nbsp;}
      }
    </div>
    <h4>单独引入某个组件使用</h4>
    <div class = "pre">
      import { createApp } from 'vue'<br/>
      import { CuButton, CuSelect } from 'viewer-design';<br/>
      import App from './App.vue';<br/>
      app.use(CuButton)<br/>
      app.use(CuSelect)<br/>
      app.mount('#app')<br/>
    </div>
    <h3>全局配置</h3>
    <div class = "warning">
      <cu-alert type = 'warning' :closable = true>
        在引入 Viewer-Design 时，可以传入一个全局配置对象。该对象目前支持 zIndex 字段。zIndex 设置弹框的初始 z-index（默认值：2000）。按需引入 Viewer-Design
        的方式，具体操作如下
      </cu-alert>
    </div>
    <div class = "pre" style="margin-top: 15px">
      import { createApp } from 'vue' <br/>
      import ViewerDesign from 'viewer-design'; <br/>
      import App from './App.vue'; <br/>

      const app = createApp(App) <br/>
      app.use(ViewerDesign, { zIndex: 3000 }); <br/>
    </div>
    <h3>开始使用</h3>
    <p>至此，一个基于 Vue 和 Viewer Design 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。</p>
  </div>
</template>

<script lang = "ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'fastStarted',
  setup() {

  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
