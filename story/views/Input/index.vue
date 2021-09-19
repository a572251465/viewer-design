<template>
  <div class="demo-input">
    <h2>Input 输入框</h2>
    <p>基于原生的input，提供了各种加强版的input输入框</p>
    <h3>基本用法</h3>
    <code-source :showFlag="true" :targetCode="example">
      <div>
        <cu-input placeholder="自定义提示" />
      </div>
    </code-source>
    <h3>不同类型</h3>
    <code-source :showFlag="false" :targetCode="example1">
      <div
        v-for="item in inputTypeList"
        :key="item.type"
        style="margin-top: 15px"
      >
        <cu-input
          v-model="item.value"
          :type="item.type"
          :placeholder="item.placeholder"
        />
      </div>
    </code-source>
    <h3>不同大小</h3>
    <code-source :showFlag="false" :targetCode="example2">
      <div
        v-for="item in ['big', 'medium', 'small', 'mini']"
        :key="item"
        style="margin-top: 15px"
      >
        <cu-input :size="item" placeholder="请输入内容" />
      </div>
    </code-source>
    <h3>计算输入字数</h3>
    <code-source :showFlag="false" :targetCode="example3">
      <div>
        <cu-input :showWordLimit="true" v-model="words" />
      </div>
    </code-source>
    <h3>可清除的</h3>
    <code-source :showFlag="false" :targetCode="example4">
      <div>
        <cu-input :clearable="true" v-model="words" />
      </div>
    </code-source>
    <h3>前后图标</h3>
    <code-source :showFlag="false" :targetCode="example5">
      <div>
        <cu-input
          placeholder="请输入账号"
          prefixIcon="edit"
          suffixIcon="search"
        />
      </div>
    </code-source>
    <h3>自动获取光标</h3>
    <code-source :showFlag="false" :targetCode="example6">
      <div>
        <cu-input :autofocus="true" placeholder="请输入账号" />
      </div>
    </code-source>
    <table-props :componentProps="componentProps">
      <h3>Input Props</h3>
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
  example6,
  componentProps,
  eventProps
} from './input-data'

const inputTypeList: { type: string; placeholder: string; value: string }[] = [
  { type: 'text', placeholder: '请输入内容', value: '' },
  { type: 'textarea', placeholder: '请输入内容', value: '' },
  { type: 'password', placeholder: '请输入密码', value: '123456' }
]

export default defineComponent({
  name: 'input',
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
      componentProps,
      eventProps,
      inputTypeList,
      words: '123456'
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
