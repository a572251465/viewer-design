<template>
  <div class="demo-link">
    <h2>Link 链接</h2>
    <p>提供一种各种状态的超链接</p>
    <h3>基本用法</h3>
    <code-source :showFlag="true" :targetCode="example">
      <cu-link type="primary" class="margin-right">有状态的</cu-link>
      <cu-link :underline="true" class="margin-right">有下划线的</cu-link>
      <cu-link :disabled="true" class="margin-right">禁用状态的</cu-link>
      <cu-link icon="edit" class="margin-right">带有icon的</cu-link>
    </code-source>
    <h3>不同状态</h3>
    <code-source :showFlag="false" :targetCode="example1">
      <cu-link
        :type="item"
        v-for="item in ['primary', 'success', 'info', 'danger', 'warning']"
        :key="item"
        class="margin-right"
        >{{ item }}
      </cu-link>
    </code-source>
    <h3>不同icon</h3>
    <code-source :showFlag="false" :targetCode="example2">
      <cu-link
        :icon="item"
        v-for="item in ['edit', 'left', 'right']"
        :key="item"
        class="margin-right"
        >{{ item }}
      </cu-link>
    </code-source>
    <table-props :componentProps="componentProps">
      <h3>Link Props</h3>
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
  componentProps,
  eventProps
} from './link-data'

export default defineComponent({
  name: 'demo-link',
  components: {
    CodeSource,
    TableProps
  },
  setup() {
    return {
      example,
      example1,
      example2,
      componentProps,
      eventProps
    }
  }
})
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
