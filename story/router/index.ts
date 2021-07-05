import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from 'story/views/Home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    name: 'home'
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
