import { createApp } from 'vue'
import App from './App.vue'

import VueRouter from './router'

import ViewerDesign from 'viewer-design'
import { Message, ITypeDialog } from 'viewer-design'
import 'theme-chalk/src/index.scss'

import 'story/assets/css/common.css'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $Message: typeof Message,
    $Dialog: ITypeDialog
  }
}

createApp(App).use(VueRouter).use(ViewerDesign).mount('#app')
