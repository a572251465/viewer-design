<template>
  <div class = "message-demo">
    <h2>Message 消息</h2>
    <p>进行用户的消息提示</p>
    <h3>基本用法</h3>
    <p>进行普通的消息提示, ts语法中直接可以proxy.$Message.success来调用，js语法中使用this.$Message.success, 请参照demo实例 </p>
    <code-source :showFlag = true :targetCode = 'example'>
      <cu-button @click = "messageOpen('success')">打开提示消息</cu-button>
    </code-source>
    <h3>不同类型</h3>
    <p>用来显示{成功，警告，消息，错误}类型的操作反馈</p>
    <code-source :showFlag = false :targetCode = 'example1'>
      <cu-button style = 'margin-left: 15px;' v-for = 'item in messageList' :key = 'item.type'
                 @click = "messageOpen(item.type)">{{
          item.label
        }}
      </cu-button>
    </code-source>
    <h3>自定义图标</h3>
    <p>设置自定义图标 以及显示后缀图标</p>
    <code-source :showFlag = false :targetCode = 'example2'>
      <cu-button @click = "messageOpen1">自定义icon</cu-button>
    </code-source>
    <h3>设置文字居中</h3>
    <p>可以设置提示的文字居中，包括icon也会居中</p>
    <code-source :showFlag = false :targetCode = 'example3'>
      <cu-button @click = "messageOpen2">提示文字居中</cu-button>
    </code-source>
    <h3>显示关闭按钮</h3>
    <p>可以让用户自行关闭消息，如果有需求会调用对应的回调方法</p>
    <code-source :showFlag = false :targetCode = 'example4'>
      <cu-button @click = "messageOpen3">显示关闭按钮</cu-button>
    </code-source>
    <h3>延长关闭时间</h3>
    <p>可以延长消息弹框关闭的时间</p>
    <code-source :showFlag = false :targetCode = 'example5'>
      <cu-button @click = "messageOpen4">设置10s关闭</cu-button>
    </code-source>
    <table-props :componentProps = 'componentProps'>
      <h3>Message Props</h3>
    </table-props>
  </div>
</template>

<script lang = "ts">
import { defineComponent, getCurrentInstance } from 'vue'
import CodeSource from 'story/components/Code/index.tsx'
import TableProps from 'story/components/TableProps/index.vue'
import { example, example1, example2, example3, example4, example5, componentProps } from './message-data'
import { $selfDialog } from '@viewer/dialog'

const messageList: { type: String, label: String }[] = [
  { type: 'success', label: '成功消息' },
  { type: 'warning', label: '警告消息' },
  { type: 'danger', label: '危险消息' },
  { type: 'info', label: '普通消息' }
]

export default defineComponent({
  name: 'message',
  components: {
    CodeSource,
    TableProps
  },
  setup() {
    const { proxy } = getCurrentInstance()

    const messageOpen = (type) => {
      proxy.$Message[type]('提示消息')
    }
    const messageOpen1 = () => {
      proxy.$Message.success({
        message: '自定义icon',
        iconClass: 'edit'
      })
    }

    const messageOpen2 = () => {
      proxy.$Message.success({
        message: '文字居中显示',
        center: true
      })
    }

    const messageOpen3 = () => {
      proxy.$Message.success({
        message: '点击关闭按钮',
        showClose: true,
        onClose: () => {
          $selfDialog.success('您点击关闭按钮了')
        }
      })
    }

    const messageOpen4 = () => {
      proxy.$Message.success({
        message: '延长时间自动关闭',
        delay: 10000
      })
    }

    return {
      messageOpen,
      messageList,
      example,
      example1,
      example2,
      example3,
      example4,
      example5,
      messageOpen1,
      messageOpen2,
      messageOpen3,
      messageOpen4,
      componentProps
    }
  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
