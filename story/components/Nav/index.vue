<template>
  <div class = "home-nav">
    <cu-time-line>
      <cu-time-line-item v-for = 'item in navList' :color = 'item.color' :hideTimestamp = true>
        <a href = "javascript:void(0);" @click = "navTipsHandle">{{ item.desc }}</a>
      </cu-time-line-item>
    </cu-time-line>
  </div>
</template>

<script lang = "ts">
import { defineComponent, onMounted, reactive, watch, toRefs, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
import targetMenuList from 'story/components/Menu/index'
import { IDetail, IMenuItem } from '../Menu'
import { randomBk } from '../../utils'

let menuList = ([
  {
    title: '前置',
    detail: [
      {
        name: 'Introduce', remark: '介绍', isShowName: false, stepChild: [
          { desc: '介绍' },
          { desc: '特性' },
          { desc: '说明' },
          { desc: '感谢' },
          { desc: '我想提PR' },
          { desc: '更多作品' }
        ]
      },
      {
        name: 'FastStarted', remark: '快速上手', isShowName: false, stepChild: [
          { desc: 'installed' },
          { desc: '引入Viewer-design' },
          { desc: '全局配置' },
          { desc: '开始使用' }
        ]
      }
    ]
  }
] as IMenuItem[]).concat(targetMenuList as IMenuItem[])
let newMenuList = menuList.map(item => item.detail)

export default defineComponent({
  name: 'home-nav',
  setup() {
    const route = useRoute()
    const state = reactive({ navList: [] })
    const { proxy } = getCurrentInstance()

    while ( newMenuList.some(item => Array.isArray(item)) ) {
      newMenuList = [].concat(...newMenuList)
    }

    const computedRouteName = () => {
      let { name } = route
      if ( !name ) {
        state.navList = [ { desc: '奋笔疾书,努力开发中......' } ]
        return false
      }
      name = (name as string).charAt(0).toUpperCase() + (name as string).slice(1)
      let stepChild = (newMenuList as any as IDetail[]).filter(item => item.name === name)
      if ( !stepChild ) {
        state.navList = [ { desc: '奋笔疾书,努力开发中......' } ]
        return false
      }
      state.navList = stepChild[0].stepChild.map(item => ({ ...item, color: randomBk() }))
    }

    const navTipsHandle = () => proxy.$Message.danger('目前不支持跳转哦，先给您一个提示哦')

    watch(route, computedRouteName)

    onMounted(() => computedRouteName())

    return {
      ...toRefs(state),
      navTipsHandle
    }
  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
