<template>
  <div class = "demo-form">
    <h2>Form 表单</h2>
    <p>提供了一套可以预判断的表单控件</p>
    <h3>基本用法</h3>
    <code-source :showFlag = true :targetCode = 'example1'>
      <cu-form :model = 'userInfo' :rules = 'rules' ref = 'forms'>
        <cu-form-item label = '手机号' prop = 'name' labelPos = 'top'>
          <cu-input v-model = 'userInfo.name'/>
        </cu-form-item>
      </cu-form>
      <div style = "margin-top: 20px">
        <cu-button @click = "commit">提交</cu-button>
        <cu-button type = 'text' @click = "reset" style = 'margin-left: 30px'>重置</cu-button>
      </div>
    </code-source>
  </div>
</template>

<script lang = "ts">
import { defineComponent, getCurrentInstance, inject, onMounted, reactive, toRefs } from 'vue'
import CodeSource from 'story/components/Code/index.tsx'
import TableProps from 'story/components/TableProps/index.vue'
import { example1 } from './form-data'

const rules = {
  name: [
    { required: true, message: '手机号不能位空' },
    { type: 'number', message: '手机号必须是数字' }
  ]
}

export default defineComponent({
  name: 'demo-form',
  components: {
    CodeSource,
    TableProps
  },
  setup() {
    const state = reactive({
      userInfo: {
        name: ''
      }
    })
    const { proxy } = getCurrentInstance()

    let check = null
    onMounted(() => {
      check = inject('check_form_handle') as () => Promise<any>
    })

    const commit = () => {
      (proxy.$refs['forms'] as any).check().then(() => {

      })
    }

    const reset = () => {
      (proxy.$refs['forms'] as any).reset().then(() => {

      })
    }

    return {
      ...toRefs(state),
      example1,
      rules,
      commit,
      reset
    }
  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
