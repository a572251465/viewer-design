<template>
  <div class = "back-up-demo">
    <h2>BackUp 回到顶部</h2>
    <p>提供了一条滚动无缝隙的回到顶部的组件</p>
    <h3>基础用法</h3>
    <div class = "alertParent">
      <cu-alert type = 'warning' :closable = true>
        &nbsp;&nbsp;&nbsp;&nbsp;点击按钮的位置对于滚动元素是相对的，所以会随着滚动元素而滚动的，但是不建议这么使用，如果你是为了完成某项特殊的业务，不在乎一点点的性能消耗是没有问题的，
        但是如果你不想点击按钮滚动，可以通过属性【idealLeft】来控制
      </cu-alert>
    </div>
    <code-source :showFlag = true :targetCode = 'example'>
      <div class = "table">
        <p v-for = "item in 30" :key = "item">{{ item }}</p>
      </div>
      <cu-back-up :right = 80 :bottom = 100 target = '.table' :visibilityHeight = 20></cu-back-up>
    </code-source>

    <table-props :componentProps = 'componentProps'>
      <h3>Back-Up Props</h3>
    </table-props>
    <table-props :componentProps = 'eventProps'>
      <h3>Back-Up Event</h3>
    </table-props>
  </div>
</template>

<script lang = "ts">
import { defineComponent } from 'vue'
import CodeSource from 'story/components/Code/index.tsx'
import TableProps from 'story/components/TableProps/index.vue'
import { example, componentProps, eventProps } from './backup-data'

export default defineComponent({
  name: 'backUp',
  components: {
    CodeSource,
    TableProps
  },
  setup() {

    return {
      example,
      componentProps,
      eventProps
    }
  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
