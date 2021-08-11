<template>
  <div class="carousel-demo">
    <h2>Carousel 走马灯</h2>
    <p>提供一种可以灵活配置的走马灯</p>
    <h3>基础用法</h3>
    <code-source :showFlag = true :targetCode = 'example'>
      <carousel>
        <carousel-item v-for="item in colors" :key = 'item'>
          <div :style="{background: item}">{{item}}</div>
        </carousel-item>
      </carousel>
    </code-source>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent } from "vue"
import CodeSource from 'story/components/Code/index.tsx'
import TableProps from 'story/components/TableProps/index.vue'
import {example} from './carousel-data'
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
      colors
    }
  }
})
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>