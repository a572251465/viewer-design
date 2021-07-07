import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from 'story/views/Home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    name: 'home',
    children: [
      {
        path: '/alert',
        component: import(/* webpackChunkName: "alert" */ 'story/views/Alert/index.vue')
      },
      {
        path: '/backUp',
        component: import(/* webpackChunkName: "backUp" */ 'story/views/BackUp/index.vue')
      },
      {
        path: '/button',
        component: import(/* webpackChunkName: "button" */ 'story/views/Button/index.vue')
      },
      {
        path: '/Col',
        component: import(/* webpackChunkName: "col" */ 'story/views/Col/index.vue')
      },
      {
        path: '/Dialog',
        component: import(/* webpackChunkName: "dialog" */ 'story/views/Dialog/index.vue')
      },
      {
        path: '/fastStarted',
        component: import(/* webpackChunkName: "fastStarted" */ 'story/views/FastStarted/index.vue')
      },
      {
        path: '/icon',
        component: import(/* webpackChunkName: "icon" */ 'story/views/Icon/index.vue')
      },
      {
        path: '/input',
        component: import(/* webpackChunkName: "input" */ 'story/views/Input/index.vue')
      },
      {
        path: '/installed',
        component: import(/* webpackChunkName: "installed" */ 'story/views/Installed/index.vue')
      },
      {
        path: '/link',
        component: import(/* webpackChunkName: "link" */ 'story/views/Link/index.vue')
      },
      {
        path: '/mark',
        component: import(/* webpackChunkName: "mark" */ 'story/views/Mark/index.vue')
      },
      {
        path: '/message',
        component: import(/* webpackChunkName: "message" */ 'story/views/Message/index.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
