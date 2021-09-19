<template>
  <div class="table-props">
    <header>
      <slot></slot>
    </header>
    <div class="content">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr v-for="(item, key) in componentProps" :key="key">
          <td>{{ item.field }}</td>
          <td>{{ item.desc }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.defaultValue }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFields } from './types'

export default defineComponent({
  name: 'table-props',
  props: {
    componentProps: {
      type: Array as PropType<IFields[]>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
