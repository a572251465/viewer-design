<template>
  <div class="button-demo">
    <h2>Button 按钮</h2>
    <p>提供一种各种状态的按钮</p>
    <h3>基础用法</h3>
    <code-source :showFlag="true" :targetCode="example">
      <cu-button size="big" class="margin-right">大的</cu-button>
      <cu-button type="success" class="margin-right">成功的</cu-button>
      <cu-button :round="true" class="margin-right">圆角的</cu-button>
      <cu-button icon="edit" class="margin-right">编辑</cu-button>
      <cu-button :disabled="true" class="margin-right">禁用的</cu-button>
      <cu-button :loading="true" class="margin-right">加载中</cu-button>
    </code-source>
    <h3>不同大小</h3>
    <code-source :targetCode="example1" :showFlag="false">
      <cu-button
        class="margin-right"
        v-for="item in ['medium', 'small', 'mini', 'big']"
        :key="item"
        :size="item"
        >{{ item }}
      </cu-button>
    </code-source>
    <h3>不同状态</h3>
    <code-source :targetCode="example2" :showFlag="false">
      <cu-button
        class="margin-right"
        v-for="item in [
          'primary',
          'success',
          'warning',
          'danger',
          'info',
          'text'
        ]"
        :type="item"
        :key="item"
        >{{ item }}
      </cu-button>
    </code-source>
    <h3>圆角按钮</h3>
    <code-source :targetCode="example3" :showFlag="false">
      <cu-button class="margin-right" :round="true">圆角按钮</cu-button>
    </code-source>
    <h3>禁用按钮</h3>
    <code-source :targetCode="example4" :showFlag="false">
      <cu-button class="margin-right" :disabled="true">禁用按钮</cu-button>
    </code-source>
    <h3>加载中按钮</h3>
    <code-source :targetCode="example5" :showFlag="false">
      <cu-button class="margin-right" :loading="true">加载中按钮</cu-button>
    </code-source>
    <h3>具有icon按钮</h3>
    <code-source :targetCode="example6" :showFlag="false">
      <cu-button
        class="margin-right"
        v-for="item in ['edit', 'search', 'close', 'date']"
        :key="item"
        :icon="item"
        >带有图标按钮
      </cu-button>
    </code-source>
    <table-props :componentProps="componentProps">
      <h3>Button Props</h3>
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
  example6,
  componentProps
} from './button-data'

export default defineComponent({
  name: 'demo-button',
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
      example6,
      componentProps
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
