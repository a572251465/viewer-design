<template>
  <div class="drawer-demo">
    <h2>Drawer 抽屉</h2>
    <p>
      抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。
    </p>
    <h3>基本用法</h3>
    <code-source :showFlag="true" :targetCode="example">
      <cu-button @click="showFlag = true">打开抽屉弹框</cu-button>
      <cu-drawer v-model="showFlag">
        <div class="flex">
          <span>account：</span>
          <cu-input placeholder="请输入账号" />
        </div>
      </cu-drawer>
    </code-source>
    <h3>不同方向的打开方式</h3>
    <p>可以通过不同的方向来打开抽屉</p>
    <code-source :showFlag="true" :targetCode="example1">
      <cu-button
        class="margin-right"
        v-for="item in ['bottom', 'top', 'right', 'left']"
        :key="item"
        @click="openDrawer(item)"
        >{{ item }}
      </cu-button>
      <cu-drawer v-model="showFlag1" :direction="position">
        <h4>不同方向的弹框</h4>
      </cu-drawer>
    </code-source>
    <h3>多种关闭弹框方式</h3>
    <p>可以通过点击遮罩层或按键{esc}来进行关闭弹框</p>
    <code-source :showFlag="false" :targetCode="example2">
      <cu-button @click="showFlag2 = true">多种方式关闭</cu-button>
      <cu-drawer
        v-model="showFlag2"
        :clickMaskClose="true"
        :closeOnPressEscape="true"
      >
        <div class="flex">
          <span>account：</span>
          <cu-input placeholder="请输入账号" />
        </div>
      </cu-drawer>
    </code-source>
    <h3>自由设置大小</h3>
    <p>如果属性{direction}是bottom, top，那么size就是高度，反之就是宽度</p>
    <code-source :showFlag="false" :targetCode="example3">
      <cu-button @click="showFlag3 = true">设置大小</cu-button>
      <cu-drawer v-model="showFlag3" size="50">
        <div class="flex">
          <span>account：</span>
          <cu-input placeholder="请输入账号" />
        </div>
      </cu-drawer>
    </code-source>
    <table-props :componentProps="componentProps">
      <h3>Drawer Props</h3>
    </table-props>
    <table-props :componentProps="eventProps">
      <h3>Event Props</h3>
    </table-props>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CodeSource from 'story/components/Code/index.tsx'
import TableProps from 'story/components/TableProps/index.vue'
import {
  example,
  example1,
  example2,
  example3,
  componentProps,
  eventProps
} from './drawer-data'

export default defineComponent({
  name: 'demo-drawer',
  components: {
    CodeSource,
    TableProps
  },
  setup() {
    const showFlag = ref<boolean>(false)
    const showFlag1 = ref<boolean>(false)
    const showFlag2 = ref<boolean>(false)
    const showFlag3 = ref<boolean>(false)
    const position = ref<string>('')
    const openDrawer = (type) => {
      position.value = type
      showFlag1.value = true
    }

    return {
      showFlag,
      showFlag1,
      showFlag2,
      showFlag3,
      example3,
      example2,
      example,
      position,
      example1,
      openDrawer,
      componentProps,
      eventProps
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
