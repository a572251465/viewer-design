<template>
  <div class = 'scroll-bar-demo'>
    <h2>Scroll Bar 滚动条</h2>
    <p>模拟浏览器滚动条，用来替代浏览器滚动条</p>
    <h3>基础用法</h3>
    <code-source :showFlag = true :targetCode = 'example'>
      <cu-scroll-bar>
        <div class = "container">
          <ul>
            <li v-for = "item in 30" :key = "item">{{ item + 1 }}</li>
          </ul>
        </div>
      </cu-scroll-bar>
    </code-source>
  </div>
</template>

<script lang = "ts">
import {defineComponent} from 'vue'
import CodeSource from 'story/components/Code/index.tsx'
import TableProps from 'story/components/TableProps/index.vue'
import {example} from './scrollBar-data'

export default defineComponent({
  name: 'scrollBar-demo',
  components: {
    CodeSource,
    TableProps
  },
  setup() {
    return {
      example
    }
  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
