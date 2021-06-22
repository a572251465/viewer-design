import { createApp } from 'vue'
import App from './App.vue'

import ViewerDesign from "viewer-design"
import "theme-chalk/src/index.scss"

createApp(App).use(ViewerDesign).mount('#app')
