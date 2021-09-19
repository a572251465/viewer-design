<template>
  <div class="col-demo">
    <h2>Col 布局</h2>
    <p>根据flex弹框布局，提供了一套完整的布局方案</p>
    <div class="width">
      <cu-alert type="warning" title="注意事项：">
        UI库单独为组件设计了cu-layout
        cu-row,可以配合cu-col灵活使用，具体使用请看demo
      </cu-alert>
    </div>
    <h3>基础用法</h3>
    <p>基本用法展示了横向顺序排列，居中对齐，以及设置偏移量</p>
    <code-source :showFlag="true" :targetCode="example">
      <div class="container">
        <cu-layout>
          <cu-row class="row">
            <cu-col :span="3" class="col">1</cu-col>
            <cu-col :span="3" class="col">2</cu-col>
          </cu-row>
          <cu-row class="row" justify="center">
            <cu-col :span="3" class="col">1</cu-col>
            <cu-col :span="3" class="col">2</cu-col>
          </cu-row>
          <cu-row class="row">
            <cu-col :span="2" :offset="2" class="col">1</cu-col>
            <cu-col :span="2" :offset="2" class="col">2</cu-col>
          </cu-row>
        </cu-layout>
      </div>
    </code-source>
    <h3>控制显示的顺序</h3>
    <p>通过控制原生的属性order，来控制显示的先后</p>
    <code-source :showFlag="false" :targetCode="example1">
      <div class="container">
        <cu-layout>
          <cu-row class="row">
            <cu-col :span="2" :offset="2" class="col" :order="4">3</cu-col>
            <cu-col :span="2" :offset="2" class="col" :order="3">4</cu-col>
            <cu-col :span="2" :offset="2" class="col" :order="2">5</cu-col>
          </cu-row>
        </cu-layout>
      </div>
    </code-source>
    <h3>控制左右间隔</h3>
    <p>可以通过特性属性，控制行左右间隔</p>
    <code-source :showFlag="false" :targetCode="example2">
      <div class="container">
        <cu-layout>
          <cu-row class="row" :gutter="20">
            <cu-col :span="3" class="col">5</cu-col>
            <cu-col :span="3" class="col">6</cu-col>
          </cu-row>
        </cu-layout>
      </div>
    </code-source>
    <h3>实现列布局</h3>
    <code-source :showFlag="false" :targetCode="example3">
      <div class="container">
        <cu-layout>
          <cu-row
            style="height: 300px"
            class="row"
            direction="column"
            justify="center"
            align="middle"
          >
            <cu-col :span="3" class="col col1">7</cu-col>
            <cu-col :span="3" class="col col1">8</cu-col>
            <cu-col :span="3" class="col col1">9</cu-col>
            <cu-col :span="3" class="col col1">10</cu-col>
          </cu-row>
        </cu-layout>
      </div>
    </code-source>
    <table-props :componentProps="layoutComponent">
      <h3>Layout Props</h3>
    </table-props>
    <table-props :componentProps="rowComponent">
      <h3>Row Props</h3>
    </table-props>
    <table-props :componentProps="colComponent">
      <h3>Col Props</h3>
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
  layoutComponent,
  rowComponent,
  colComponent
} from './col-data'

export default defineComponent({
  name: 'col',
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
      layoutComponent,
      rowComponent,
      colComponent
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
