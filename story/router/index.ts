import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from 'story/views/Home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    redirect: '/icon',
    name: 'home',
    children: [
      {
        path: '/alert',
        name: 'alert',
        component: import(/* webpackChunkName: "alert" */ 'story/views/Alert/index.vue')
      },
      {
        path: '/backUp',
        name: 'backUp',
        component: import(/* webpackChunkName: "backUp" */ 'story/views/BackUp/index.vue')
      },
      {
        path: '/button',
        name: 'button',
        component: import(/* webpackChunkName: "button" */ 'story/views/Button/index.vue')
      },
      {
        path: '/col',
        name: 'col',
        component: import(/* webpackChunkName: "col" */ 'story/views/Col/index.vue')
      },
      {
        path: '/dialog',
        name: 'dialog',
        component: import(/* webpackChunkName: "dialog" */ 'story/views/Dialog/index.vue')
      },
      {
        path: '/drawer',
        name: 'drawer',
        component: import(/* webpackChunkName: "dialog" */ 'story/views/Drawer/index.vue')
      },
      {
        path: '/fastStarted',
        name: 'fastStarted',
        component: import(/* webpackChunkName: "fastStarted" */ 'story/views/FastStarted/index.vue')
      },
      {
        path: '/icon',
        name: 'icon',
        component: import(/* webpackChunkName: "icon" */ 'story/views/Icon/index.vue')
      },
      {
        path: '/input',
        name: 'input',
        component: import(/* webpackChunkName: "input" */ 'story/views/Input/index.vue')
      },
      {
        path: '/installed',
        name: 'installed',
        component: import(/* webpackChunkName: "installed" */ 'story/views/Installed/index.vue')
      },
      {
        path: '/link',
        name: 'link',
        component: import(/* webpackChunkName: "link" */ 'story/views/Link/index.vue')
      },
      {
        path: '/mark',
        name: 'mark',
        component: import(/* webpackChunkName: "mark" */ 'story/views/Mark/index.vue')
      },
      {
        path: '/message',
        name: 'message',
        component: import(/* webpackChunkName: "message" */ 'story/views/Message/index.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        component: import(/* webpackChunkName: "notFound" */ 'story/views/NotFound/index.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
