<template>
  <div class = "header">
    <div class = "header-logo">
      Viewer-Design
    </div>
    <div class = "header-content">
      <cu-input placeholder = '请搜索'/>
      <ul>
        <li v-for = "item in navList"
            :class = "[activeNav === item.value ? 'active' : '']"
            @click = "navClickHandle(item.value)"
            :key = "item.value">
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang = "ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'

const navList: ({ value: string, label: string })[] = [
  { label: '关于', value: 'about' },
  { label: '组件', value: 'component' },
  { label: '赞助', value: 'sponsor' },
  { label: '作品', value: 'works' }
]
export default defineComponent({
  name: 'header',
  setup() {
    const state = reactive({ navList }),
        activeNav = ref<string>('component')

    const navClickHandle = val => activeNav.value = val

    return {
      ...toRefs(state),
      activeNav,
      navClickHandle
    }
  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
