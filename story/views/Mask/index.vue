<template>
  <div class = "mark-demo">
    <h2>Mask 遮罩层</h2>
    <p>提供一种各种状态的按钮</p>
    <h3>居中显示</h3>
    <code-source :showFlag = true :targetCode = 'example'>
      <cu-button @click = "showFlag = true">点我打开</cu-button>
      <div v-show = "showFlag">
        <cu-mask :center = true>
          <cu-button @click = "showFlag = false">点我关闭</cu-button>
        </cu-mask>
      </div>
    </code-source>
    <table-props :componentProps = 'componentProps'>
      <h3>Mask Props</h3>
    </table-props>
    <table-props :componentProps = 'eventProps'>
      <h3>Mask Event</h3>
    </table-props>
  </div>
</template>

<script lang = "ts">
import { defineComponent, ref } from 'vue'
import CodeSource from 'story/components/Code/index.tsx'
import TableProps from 'story/components/TableProps/index.vue'
import { example, componentProps, eventProps } from './mask-data'

export default defineComponent({
  name: 'mark',
  components: {
    CodeSource,
    TableProps
  },
  setup() {
    const showFlag = ref<boolean>(false)

    return {
      showFlag,
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
