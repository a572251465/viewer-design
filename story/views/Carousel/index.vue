<template>
  <div class="carousel-demo">
    <h2>Carousel 走马灯</h2>
    <p>提供一种可以灵活配置的走马灯</p>
    <h3>基础用法 -- 默认设置</h3>
    <code-source :showFlag = true :targetCode = 'example'>
      <div class="container">
        <cu-carousel>
          <cu-carousel-item v-for="(item, key) in colors" :key = 'item'>
            <div :style="{background: item, width: '100%', height: '100%'}" class="justify-align-center">{{item + (key + 1)}}</div>
          </cu-carousel-item>
        </cu-carousel>
      </div>
    </code-source>
    <h3>上下滑动</h3>
    <cu-alert type = 'info' style="width: 80%;">可以通过属性【<b>direction</b>】来设置上下滚动</cu-alert>
    <code-source :showFlag = false :targetCode = 'example1'>
      <div class="container">
        <cu-carousel direction = 'vertical'>
          <cu-carousel-item v-for="(item, key) in colors" :key = 'item'>
            <div :style="{background: item, width: '100%', height: '100%'}" class="justify-align-center">{{item + (key + 1)}}</div>
          </cu-carousel-item>
        </cu-carousel>
      </div>
    </code-source>
    <h3>设置不自动轮播</h3>
    <cu-alert type = 'info' style="width: 80%;">可以通过属性【<b>autoplay</b>】来设置不自动轮播</cu-alert>
    <code-source :showFlag = false :targetCode = 'example2'>
      <div class="container">
        <cu-carousel :autoplay = false>
          <cu-carousel-item v-for="(item, key) in colors" :key = 'item'>
            <div :style="{background: item, width: '100%', height: '100%'}" class="justify-align-center">{{item + (key + 1)}}</div>
          </cu-carousel-item>
        </cu-carousel>
      </div>
    </code-source>
    <h3>指示条在外</h3>
    <cu-alert type = 'info' style="width: 80%;">可以通过属性【<b>indicatorPosition</b>】来设置指示条在容器外</cu-alert>
    <code-source :showFlag = false :targetCode = 'example3'>
      <div class="container">
        <cu-carousel indicatorPosition = 'outside'>
          <cu-carousel-item v-for="(item, key) in colors" :key = 'item'>
            <div :style="{background: item, width: '100%', height: '100%'}" class="justify-align-center">{{item + (key + 1)}}</div>
          </cu-carousel-item>
        </cu-carousel>
      </div>
    </code-source>
    <table-props :componentProps = 'componentProps'>
      <h3>Carousel Props</h3>
    </table-props>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent } from "vue"
import CodeSource from 'story/components/Code/index.tsx'
import TableProps from 'story/components/TableProps/index.vue'
import {example, example1, example2, example3, componentProps} from './carousel-data'
const colors: string[] = ['red', 'yellow', 'green', 'blue']

export default defineComponent({
  name: 'demo-carousel',
  components: {
    CodeSource,
    TableProps
  },
  setup() {
    return {
      example,
      colors,
      example1,
      example2,
      example3,
      componentProps
    }
  }
})
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>