<template>
  <div class="dialog-demo">
    <h2>Dialog 弹框</h2>
    <p>进行用户的消息提示</p>
    <h3>基本用法</h3>
    <code-source :showFlag="true" :targetCode="example">
      <cu-dialog v-model="showFlag">
        <div style="margin: 30px 0px 0px 30px">
          <label>account：</label>
          <cu-input placeholder="请输入账号" />
        </div>
      </cu-dialog>
      <cu-button @click="showFlag = true">点击打开弹框</cu-button>
    </code-source>
    <h3>自定义标题以及宽度</h3>
    <code-source :showFlag="false" :targetCode="example1">
      <cu-button @click="showFlag1 = true">自定义标题及宽度</cu-button>
      <cu-dialog v-model="showFlag1" title="表单弹出框" width="80%">
        <h3>设置了自定义标题 以及自定义宽度</h3>
      </cu-dialog>
    </code-source>
    <h3>自定义距离顶部的位置</h3>
    <code-source :showFlag="false" :targetCode="example2">
      <cu-button @click="showFlag2 = true">距离顶部的距离</cu-button>
      <cu-dialog v-model="showFlag2" top="20px">
        <h3>距离顶部的位置</h3>
      </cu-dialog>
    </code-source>
    <h3>多种关闭方式</h3>
    <p>可以点击遮罩层 或是 按键{esc}进行关闭</p>
    <code-source :showFlag="false" :targetCode="example3">
      <cu-button @click="showFlag3 = true">多重关闭方式</cu-button>
      <cu-dialog
        v-model="showFlag3"
        :closeOnPressEscape="true"
        :closeOnClickModel="true"
      >
        <h3>可以点击遮罩层 或是 按键{esc}进行关闭</h3>
      </cu-dialog>
    </code-source>
    <h3>隐藏头部 以及footer部</h3>
    <p>可以隐藏头部以及footer部分样式，使用自定义的</p>
    <code-source :showFlag="false" :targetCode="example4">
      <cu-button @click="showFlag4 = true">隐藏header以及footer部</cu-button>
      <cu-dialog
        v-model="showFlag4"
        :closeOnPressEscape="true"
        :closeOnClickModel="true"
        :visibleHeader="false"
        :visibleFooter="false"
      >
        <h3>可以隐藏头部以及footer部分样式，使用自定义的</h3>
      </cu-dialog>
    </code-source>
    <h3>延迟 打开或是关闭弹框</h3>
    <p>为了满足客户定制化需求，弹框定制了延迟打开弹框以及延迟关闭弹框</p>
    <code-source :showFlag="false" :targetCode="example5">
      <cu-button @click="showFlag5 = true">延迟打开或关闭</cu-button>
      <cu-dialog v-model="showFlag5" :openDelay="2000" :closeDelay="5000">
        <h3>为了满足客户定制化需求，弹框定制了延迟打开弹框以及延迟关闭弹框</h3>
        <h3>打开延迟2s 关闭延迟5s</h3>
      </cu-dialog>
    </code-source>
    <h3>弹框居中显示</h3>
    <code-source :showFlag="false" :targetCode="example6">
      <cu-button @click="showFlag6 = true">弹框居中显示</cu-button>
      <cu-dialog v-model="showFlag6" :center="true">
        <h3>弹框居中显示</h3>
      </cu-dialog>
    </code-source>
    <h3>强大的指令系统</h3>
    <p>
      dialog中除了提供内容性弹框，同时提供了通过指令形式调用的弹框，为用户更好的交互提供了方便
    </p>
    <code-source :showFlag="false" :targetCode="example7">
      <p>确定提示框</p>
      <cu-alert
        style="margin-top: 10px"
        :type="item"
        v-for="item in ['info', 'success', 'warning', 'danger']"
        :key="item"
      >
        <cu-link @click="openDialog(item)">{{ item }} -- 确认提示框</cu-link>
      </cu-alert>
      <p>确认提示框</p>
      <cu-alert style="margin-top: 10px" type="success">
        <cu-link @click="openDialog('confirm')">confirm -- 确认提示框</cu-link>
      </cu-alert>
    </code-source>
    <table-props :componentProps="componentProps">
      <h3>Dialog Props</h3>
    </table-props>
    <table-props :componentProps="eventProps">
      <h3>Event Props</h3>
    </table-props>
    <h3>注意事项：</h3>
    <div style="width: 80%">
      <cu-alert type="warning" :closable="true" closeText="我知道了">
        由于本组件将输入性弹框以及指令性弹框合并为一起，上述参数中字段{desc}是**开头的都是只有指令可以使用的
      </cu-alert>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from 'vue'
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
  example7,
  componentProps,
  eventProps
} from './dialog-data'

export default defineComponent({
  name: 'dialog',
  components: {
    CodeSource,
    TableProps
  },
  setup() {
    const showFlag = ref<boolean>(false)
    const showFlag1 = ref<boolean>(false)
    const showFlag2 = ref<boolean>(false)
    const showFlag3 = ref<boolean>(false)
    const showFlag4 = ref<boolean>(false)
    const showFlag5 = ref<boolean>(false)
    const showFlag6 = ref<boolean>(false)
    const { proxy } = getCurrentInstance()

    const openDialog = (type) => {
      proxy.$Dialog[type](`${type} -- 确认框`)
    }

    return {
      showFlag,
      showFlag1,
      showFlag2,
      example,
      example1,
      example2,
      example3,
      showFlag3,
      showFlag4,
      showFlag5,
      showFlag6,
      example4,
      example5,
      example6,
      example7,
      openDialog,
      componentProps,
      eventProps
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
