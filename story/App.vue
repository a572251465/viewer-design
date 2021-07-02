<template>
  <div>
    app
    <cu-icon></cu-icon>
    <cu-button size = 'medium' :loading = true>按钮</cu-button>
    <cu-button size = "small" @click = "messageHandle">按钮</cu-button>
    <cu-button size = "mini">按钮</cu-button>
    <cu-button size = "big" :round = true>按钮</cu-button>
    <cu-button size = "big" type = "primary">按钮</cu-button>
    <cu-button size = "big" type = "success" :round = true>按钮</cu-button>
    <cu-button size = "big" type = "warning" :circle = true>按钮</cu-button>
    <cu-button size = "big" type = "danger" icon = 'loading'>按钮</cu-button>
    <cu-button size = "big" type = "info" :disabled = true>按钮</cu-button>
    <cu-button size = "big" type = "text" :disabled = true :round = true>线</cu-button>
    <cu-button size = "big" type = "info" :circle = true>按钮</cu-button>
    <cu-button size = "mini" type = "info" icon = "right"></cu-button>
    <div>
      <hr/>
    </div>
    <cu-layout>
      <cu-row class = "row">
        <cu-col :span = 3 class = "col">1</cu-col>
        <cu-col :span = 3 class = "col">2</cu-col>
      </cu-row>
      <cu-row class = "row" justify = "center">
        <cu-col :span = 3 class = "col">1</cu-col>
        <cu-col :span = 3 class = "col">2</cu-col>
      </cu-row>
      <cu-row class = "row">
        <cu-col :span = 2 :offset = 2 class = "col">1</cu-col>
        <cu-col :span = 2 :offset = 2 class = "col">2</cu-col>
      </cu-row>
      <cu-row class = "row">
        <cu-col :span = 2 :offset = 2 class = "col" :order = 4>3</cu-col>
        <cu-col :span = 2 :offset = 2 class = "col" :order = 3>4</cu-col>
      </cu-row>
      <cu-row class = "row" :gutter = 20>
        <cu-col :span = 3 class = "col">5</cu-col>
        <cu-col :span = 3 class = "col">6</cu-col>
      </cu-row>
    </cu-layout>
    <div>
      <hr/>
    </div>
    <cu-button size = "small" @click = "messageHandle('success')">成功</cu-button>
    <cu-button size = "small" @click = "messageHandle('warning')">警告</cu-button>
    <cu-button size = "small" @click = "messageHandle('danger')">危险</cu-button>
    <cu-button size = "small" @click = "messageHandle('info')">信息</cu-button>
    <div>
      <hr/>
    </div>
    <div>
      <cu-input prefixIcon = 'search' :show-word-limit = true :readonly = true :autofocus = true v-model = 'changeVal'/>
    </div>
    <hr/>
    <div>
      <cu-input :clearable = true />
    </div>
    <hr/>
    <div>
      <cu-input type = 'textarea' />
    </div>
    <hr/>
    <div>
      <cu-input type = 'password' />
    </div>
    <hr />
    <div>
      <cu-button @click="openDialog">点击打开弹框</cu-button>
      <cu-dialog v-model = "dialogShowFlag" :closeOnClickModel = true width = '50%' :center = true height = '200'>测试下</cu-dialog>
    </div>
    <hr />
    <div>
      <cu-button @click="openConfirm('confirm')">确认框</cu-button>
      <cu-button size = "small" @click = "openConfirm('success')">成功</cu-button>
      <cu-button size = "small" @click = "openConfirm('warning')">警告</cu-button>
      <cu-button size = "small" @click = "openConfirm('danger')">危险</cu-button>
      <cu-button size = "small" @click = "openConfirm('info')">信息</cu-button>
    </div>
    <hr />
    <div>
      <cu-link>测试1</cu-link>
      <cu-link type = 'primary' :underline = true href = 'https://www.baidu.com/' target = '_blank' >测试2</cu-link>
      <cu-link type = 'success' :disabled = true href = 'https://www.baidu.com/' >测试3</cu-link>
      <cu-link type = 'danger' href = 'https://www.baidu.com/' >测试4</cu-link>
      <cu-link type = 'warning' href = 'https://www.baidu.com/' >测试5</cu-link>
      <cu-link type = 'warning' icon = 'eye' href = 'https://www.baidu.com/' >查询</cu-link>
    </div>
    <hr />
    <div>
      <cu-alert
          v-for = 'item in ["info", "primary", "warning", "danger", "success"]'
          :key="item"
          :type = "item"
          :title = 'item'
          :showIcon = true
          :closable = true
          :style = "{marginTop: '20px'}"
      >
      </cu-alert>
      <cu-alert :closable = true closeText = '我知道了' :style = "{marginTop: '20px'}" title = '测试下自定义关闭文字'></cu-alert>
      <cu-alert :closable = true :center = true closeText = '我知道了' :style = "{marginTop: '20px'}" title = '测试下自定义关闭文字'></cu-alert>
    </div>
    <hr />
    <div>
      <cu-button @click="openDrawer">点击打开drawer</cu-button>
      <cu-drawer v-model="drawerShowFlag" title="我就是标题">
        我就是内容
      </cu-drawer>
    </div>
  </div>
</template>

<script lang = "ts">
import { defineComponent, getCurrentInstance, ref } from 'vue'
import CuDrawer from '@viewer/drawer/src/drawer.vue'

export default defineComponent({
  name: 'App',
  components: { CuDrawer },
  setup() {
    const { proxy } = getCurrentInstance()!,
        dialogShowFlag = ref(false),
        drawerShowFlag = ref(false)
    const messageHandle = (type) => {
      (proxy as any).$Message[type]({
        message: '测试下'
      })
    },
        changeVal = ref(111)

    const openDialog = () => {
      dialogShowFlag.value = true
    }

    const openConfirm = (type) => {
      (proxy as any).$Dialog[type]('测试下确认框')
    }

    const openDrawer = () => {
      drawerShowFlag.value = true
    }

    return {
      messageHandle,
      changeVal,
      dialogShowFlag,
      openDialog,
      openConfirm,
      openDrawer,
      drawerShowFlag
    }
  }
})
</script>

<style scoped lang = "scss">
.row {
  background: #f9fafc;
  padding: 10px 0px;
}

.col {
  background: #d3dce6;
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  text-align: center;
}
</style>
