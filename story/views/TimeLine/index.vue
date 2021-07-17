<template>
  <div class = "time-line-demo">
    <h2>Time-Line 时间线</h2>
    <p>提供了简洁而且易配置的时间线</p>
    <h3>基础用法</h3>
    <code-source :showFlag = true :targetCode = 'example'>
      <cu-time-line>
        <cu-time-line-item
            v-for = '(item, key) in data1'
            :key = 'key'
            color = '#e4e7ed'
            :placement = 'item.placement'
            :timestamp = 'item.timestamp'>
          {{ item.desc }}
        </cu-time-line-item>
      </cu-time-line>
    </code-source>
    <h3>不同的状态</h3>
    <code-source :showFlag = false :targetCode = 'example1'>
      <cu-time-line>
        <cu-time-line-item
            v-for = "(item, key) in ['primary', 'success', 'warning', 'danger', 'info']"
            :key = 'key'
            :type = 'item'
            placement = 'top'
            timestamp = '2021-07-17 00:00:00'>
          状态：{{ item }}
        </cu-time-line-item>
      </cu-time-line>
    </code-source>
    <h3>设置大小</h3>
    <code-source :showFlag = false :targetCode = 'example2'>
      <cu-time-line>
        <cu-time-line-item
            v-for = "(item, key) in ['primary', 'success', 'warning', 'danger', 'info']"
            :key = 'key'
            :type = 'item'
            size = 'big'
            placement = 'top'
            timestamp = '2021-07-17 00:00:00'>
          状态：{{ item }}
        </cu-time-line-item>
      </cu-time-line>
    </code-source>
    <h3>设置图标</h3>
    <code-source :showFlag = false :targetCode = 'example3'>
      <cu-time-line>
        <cu-time-line-item
            v-for = '(item, key) in data1'
            :key = 'key'
            icon = 'example'
            color = '#e4e7ed'
            :placement = 'item.placement'
            :timestamp = 'item.timestamp'>
          {{ item.desc }}
        </cu-time-line-item>
      </cu-time-line>
    </code-source>
    <table-props :componentProps = 'timeLineComponent'>
      <h3>Time-Line Props</h3>
    </table-props>
    <table-props :componentProps = 'timeLineItemComponent'>
      <h3>Time-Line-Item Props</h3>
    </table-props>
  </div>
</template>

<script lang = "ts">
import { defineComponent } from 'vue'
import CodeSource from 'story/components/Code/index.tsx'
import TableProps from 'story/components/TableProps/index.vue'
import { example, example1, example2, example3, timeLineComponent, timeLineItemComponent } from './time-line-data'

export default defineComponent({
  name: 'demo-time-line',
  components: {
    CodeSource,
    TableProps
  },
  setup() {

    const data1: {
      timestamp: string,
      placement: string,
      desc: string
    }[] = Array.from({ length: 5 }, () => 0).map((item, key) => {
      return {
        timestamp: '2018-04-03',
        placement: 'bottom',
        desc: `活动倒计时${ key }`
      } as {
        timestamp: string,
        placement: string,
        desc: string
      }
    })

    return {
      example,
      example1,
      example2,
      example3,
      data1,
      timeLineComponent,
      timeLineItemComponent
    }
  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
