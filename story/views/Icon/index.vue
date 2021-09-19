<template>
  <div class="icon-demo">
    <h2>Icon 图标</h2>
    <p>提供一套常用的图标集合</p>
    <h3>使用方法</h3>
    <p>直接通过设置类名称为 class = [cu-icon-className] 来使用即可，例如：</p>
    <Code :showFlag="true" :targetCode="example">
      <i class="cu-icon-edit margin-right font-size"></i>
      <i class="cu-icon-excel margin-right font-size"></i>
      <cu-button
        size="big"
        type="success"
        icon="edit"
        :round="true"
        class="margin-right"
        >编辑</cu-button
      >
      <cu-button size="mini" icon="right" class="margin-right"></cu-button>
    </Code>
    <h3>图标集合</h3>
    <div class="input">
      <cu-input
        :width="500"
        v-model="inputKeyWord"
        placeholder="请输入英文关键字搜索，比如：success"
        suffixIcon="search"
      />
    </div>
    <ul>
      <li v-for="item in iconList" :key="item" @click="copyContent(item)">
        <i :class="item"></i>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, ref } from 'vue'
import Code from 'story/components/Code/index.tsx'
import { ICodeDetail } from '../../components/Code/types'
import icons from './icons'

const example: ICodeDetail[] = [
  {
    labelName: 'i',
    fields: [{ key: 'class', value: 'cu-icon-edit' }]
  },
  {
    labelName: 'i',
    fields: [{ key: 'class', value: 'cu-icon-excel' }]
  },
  {
    labelName: 'cu-button',
    fields: [
      { key: 'size', value: 'big' },
      { key: 'type', value: 'success' },
      { key: 'icon', value: 'edit' },
      { key: 'round', value: 'true' }
    ],
    value: '编辑'
  },
  {
    labelName: 'cu-button',
    fields: [
      { key: 'size', value: 'mini' },
      { key: 'icon', value: 'right' }
    ]
  }
]

export default defineComponent({
  name: 'icon',
  components: {
    Code
  },
  setup() {
    const inputKeyWord = ref<string>('')
    const iconList = computed<string[]>(() => {
      if (!inputKeyWord.value) return icons.map((icon) => `cu-icon-${icon}`)
      return icons
        .filter((icon) => icon.includes(inputKeyWord.value))
        .map((icon) => `cu-icon-${icon}`)
    })
    const { proxy } = getCurrentInstance()!
    const copyContent = (content) => {
      proxy.$Message.success(`选中了【${content}】`)
    }

    return {
      example,
      inputKeyWord,
      iconList,
      copyContent
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
