import { createApp } from 'vue'
import App from './App.vue'

import VueRouter from './router'

import ViewerDesign from "viewer-design"
import "theme-chalk/src/index.scss"

import 'story/assets/css/common.css'

createApp(App).use(VueRouter).use(ViewerDesign).mount('#app')
