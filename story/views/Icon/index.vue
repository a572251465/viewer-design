<template>
  <div class = "icon-demo">
    <h2>Icon 图标</h2>
    <p>提供一套常用的图标集合</p>
    <h3>使用方法</h3>
    <p>直接通过设置类名称为 class = [cu-icon-className] 来使用即可，例如：</p>
    <Code></Code>
  </div>
</template>

<script lang = "ts">
import { defineComponent } from 'vue'
import Code from 'story/components/Code/index.tsx'

export default defineComponent({
  name: 'icon',
  components: {
    Code
  },
  setup() {

  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
