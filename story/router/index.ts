import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from 'story/views/Home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    redirect: '/introduce',
    name: 'home',
    children: [
      {
        path: '/alert',
        name: 'alert',
        components: {
          child: import(
            /* webpackChunkName: "alert" */ 'story/views/Alert/index.vue'
          )
        }
      },
      {
        path: '/backUp',
        name: 'backUp',
        components: {
          child: import(
            /* webpackChunkName: "backUp" */ 'story/views/BackUp/index.vue'
          )
        }
      },
      {
        path: '/button',
        name: 'button',
        components: {
          child: import(
            /* webpackChunkName: "button" */ 'story/views/Button/index.vue'
          )
        }
      },
      {
        path: '/col',
        name: 'col',
        components: {
          child: import(
            /* webpackChunkName: "col" */ 'story/views/Col/index.vue'
          )
        }
      },
      {
        path: '/dialog',
        name: 'dialog',
        components: {
          child: import(
            /* webpackChunkName: "dialog" */ 'story/views/Dialog/index.vue'
          )
        }
      },
      {
        path: '/drawer',
        name: 'drawer',
        components: {
          child: import(
            /* webpackChunkName: "drawer" */ 'story/views/Drawer/index.vue'
          )
        }
      },
      {
        path: '/fastStarted',
        name: 'fastStarted',
        components: {
          child: import(
            /* webpackChunkName: "fastStarted" */ 'story/views/FastStarted/index.vue'
          )
        }
      },
      {
        path: '/icon',
        name: 'icon',
        components: {
          child: import(
            /* webpackChunkName: "icon" */ 'story/views/Icon/index.vue'
          )
        }
      },
      {
        path: '/input',
        name: 'input',
        components: {
          child: import(
            /* webpackChunkName: "input" */ 'story/views/Input/index.vue'
          )
        }
      },
      {
        path: '/introduce',
        name: 'introduce',
        components: {
          child: import(
            /* webpackChunkName: "installed" */ 'story/views/Introduce/index.vue'
          )
        }
      },
      {
        path: '/link',
        name: 'link',
        components: {
          child: import(
            /* webpackChunkName: "link" */ 'story/views/Link/index.vue'
          )
        }
      },
      {
        path: '/mask',
        name: 'mask',
        components: {
          child: import(
            /* webpackChunkName: "mark" */ 'story/views/Mask/index.vue'
          )
        }
      },
      {
        path: '/message',
        name: 'message',
        components: {
          child: import(
            /* webpackChunkName: "message" */ 'story/views/Message/index.vue'
          )
        }
      },
      {
        path: '/timeLine',
        name: 'timeLine',
        components: {
          child: import(
            /* webpackChunkName: "message" */ 'story/views/TimeLine/index.vue'
          )
        }
      },
      {
        path: '/form',
        name: 'form',
        components: {
          child: import(
            /* webpackChunkName: "message" */ 'story/views/Form/index.vue'
          )
        }
      },
      {
        path: '/scrollBar',
        name: 'scrollBar',
        components: {
          child: import(
            /* webpackChunkName: "message" */ 'story/views/ScrollBar/index.vue'
          )
        }
      },
      {
        path: '/carousel',
        name: 'carousel',
        components: {
          child: import(
            /* webpackChunkName: "message" */ 'story/views/Carousel/index.vue'
          )
        }
      },
      {
        path: '/:pathMatch(.*)*',
        components: {
          child: import(
            /* webpackChunkName: "notFound" */ 'story/views/NotFound/index.vue'
          )
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
