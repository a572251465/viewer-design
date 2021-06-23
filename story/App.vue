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
      <cu-dialog width = '50%' height = '200'>测试下</cu-dialog>
    </div>
  </div>
</template>

<script lang = "ts">
import { defineComponent, getCurrentInstance, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const { proxy } = getCurrentInstance()!
    const messageHandle = (type) => {
      (proxy as any).$Message[type]({
        message: '测试下'
      })
    },
        changeVal = ref(111)
    return {
      messageHandle,
      changeVal
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
