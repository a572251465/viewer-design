<template>
  <div class="demo-alert">
    <h2>Alert 警告</h2>
    <p>用于页面中展示重要的提示信息。</p>
    <h3>基本用法</h3>
    <p>会宽度实现自适应</p>
    <code-source :showFlag="true" :targetCode="example">
      <cu-alert title="标题提示">默认的文案</cu-alert>
    </code-source>
    <h3>不同类型</h3>
    <p>不同类型提示，供用户自由选择</p>
    <code-source :showFlag="false" :targetCode="example1">
      <div style="margin-top: 10px" v-for="item in alertList" :key="item.type">
        <cu-alert :type="item.type">{{ item.text }}</cu-alert>
      </div>
    </code-source>
    <h3>显示关闭图标</h3>
    <code-source :showFlag="false" :targetCode="example2">
      <cu-alert :closable="true">可关闭的文案</cu-alert>
    </code-source>
    <h3>提示文字居中</h3>
    <code-source :showFlag="false" :targetCode="example3">
      <cu-alert :center="true">提示文字居中</cu-alert>
    </code-source>
    <h3>自定义关闭文字</h3>
    <code-source :showFlag="false" :targetCode="example4">
      <cu-alert closeText="我知道了" :closable="true">自定义关闭文字</cu-alert>
    </code-source>
    <h3>显示图标</h3>
    <code-source :showFlag="false" :targetCode="example5">
      <cu-alert :showIcon="true">显示提示文案图标</cu-alert>
    </code-source>
    <table-props :componentProps="componentProps">
      <h3>Alert Props</h3>
    </table-props>
    <table-props :componentProps="eventProps">
      <h3>Event Props</h3>
    </table-props>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CodeSource from 'story/components/Code/index.tsx'
import TableProps from 'story/components/TableProps/index.vue'
import {
  example,
  example1,
  example2,
  example3,
  example4,
  example5,
  componentProps,
  eventProps
} from './alert-data'

const alertList: { text: string; type: string }[] = [
  { text: '默认提示的文案', type: 'info' },
  { text: '活性提示的文案', type: 'primary' },
  { text: '警告提示的文案', type: 'warning' },
  { text: '危险提示的文案', type: 'danger' },
  { text: '成功提示的文案', type: 'success' }
]

export default defineComponent({
  name: 'alert',
  components: {
    CodeSource,
    TableProps
  },
  setup() {
    return {
      example,
      example1,
      example2,
      example3,
      example4,
      example5,
      componentProps,
      eventProps,
      alertList
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
