<template>
  <div class="form-demo">
    <h2>Form 表单</h2>
    <p>提供了一套可以预判断的表单控件</p>
    <h3>基本用法</h3>
    <code-source :showFlag="true" :targetCode="example1">
      <cu-form :model="userInfo" :rules="rules" ref="forms">
        <cu-form-item label="手机号" prop="name" labelPos="top">
          <cu-input v-model="userInfo.name" />
        </cu-form-item>
      </cu-form>
      <div style="margin-top: 20px">
        <cu-button @click="commit">提交</cu-button>
        <cu-button type="text" @click="reset" style="margin-left: 30px"
          >重置</cu-button
        >
      </div>
    </code-source>
    <h3>不同位置</h3>
    <code-source :showFlag="false" :targetCode="example1">
      <div>
        <cu-button @click="settingPos('left')">向左</cu-button>
        <cu-button class="btns" @click="settingPos('top')">向上</cu-button>
        <cu-button class="btns" @click="settingPos('right')">向右</cu-button>
      </div>
      <cu-form :model="userInfo" :rules="rules" ref="forms">
        <cu-form-item
          label="账号"
          prop="name"
          :labelPos="labelPos"
          class="form-item"
        >
          <cu-input v-model="userInfo.name" />
        </cu-form-item>
        <cu-form-item
          label="密码"
          prop="name"
          :labelPos="labelPos"
          class="form-item"
        >
          <cu-input v-model="userInfo.name" />
        </cu-form-item>
        <cu-form-item
          label="验证码"
          prop="name"
          :labelPos="labelPos"
          class="form-item"
        >
          <cu-input v-model="userInfo.name" />
        </cu-form-item>
      </cu-form>
    </code-source>
    <table-props :componentProps="formComponentProps">
      <h3>Form Props</h3>
    </table-props>
    <table-props :componentProps="formItemComponentProps">
      <h3>FormItem Props</h3>
    </table-props>
    <table-props :componentProps="eventProps">
      <h3>Event Props</h3>
    </table-props>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  reactive,
  ref,
  toRefs
} from 'vue'
import CodeSource from 'story/components/Code/index.tsx'
import TableProps from 'story/components/TableProps/index.vue'
import {
  example1,
  formComponentProps,
  formItemComponentProps,
  eventProps
} from './form-data'

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
    const labelPos = ref<string>('left')
    const settingPos = (pos) => {
      labelPos.value = pos
    }
    const { proxy } = getCurrentInstance()

    let check = null
    onMounted(() => {
      check = inject('check_form_handle') as () => Promise<any>
    })

    const commit = () => {
      ;(proxy.$refs.forms as any).check().then(() => {
        console.log('success')
      })
    }

    const reset = () => {
      ;(proxy.$refs.forms as any).reset().then(() => {
        console.log('success')
      })
    }

    return {
      ...toRefs(state),
      example1,
      rules,
      commit,
      reset,
      labelPos,
      settingPos,
      formComponentProps,
      formItemComponentProps,
      eventProps
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
