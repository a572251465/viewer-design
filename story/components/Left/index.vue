<template>
  <div class = "left">
    <div v-for = "(item, key) in menuList" :key = "key">
      <span class = "bTitle">{{ item.title }}</span>
      <ul>
        <li v-for = "(item1, key1) in item.detail"
            :class = "[activeNav === item1.name ? 'active': '']"
            @click = "clickNavSkipPage(item1.name)"
            :key = "key1">
          <span v-show = "item1.isShowName !== false">{{ item1.name }}</span>
          <span>{{ item1.remark }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang = "ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import targetMenuList from 'story/components/Menu/index'
import { IMenuItem } from '../Menu'
import { useRouter } from 'vue-router'

const menuList = ([
  {
    title: '前置',
    detail: [
      { name: 'Installed', remark: '安装', isShowName: false },
      { name: 'FastStarted', remark: '快速上手', isShowName: false }
    ]
  }
] as IMenuItem[]).concat(targetMenuList as IMenuItem[])

export default defineComponent({
  name: 'left',
  setup() {
    const state = reactive({ menuList }),
        activeNav = ref<string>(''),
        store = useRouter()

    const clickNavSkipPage = pageName => {
      activeNav.value = pageName
      pageName = pageName.charAt(0).toLowerCase() + pageName.slice(1)
      store.push({ path: pageName })
    }
    return {
      ...toRefs(state),
      activeNav,
      clickNavSkipPage
    }
  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
