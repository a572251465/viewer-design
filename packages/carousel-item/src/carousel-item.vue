<template>
  <transition :name="transitionName">
    <div
      class="cu-carousel-item"
      v-if="currentComponentIden === currentCheckedIndex"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  ref
} from '@vue/runtime-core'
import { IIdenProvide } from '../../carousel/src/types'

export default defineComponent({
  name: 'cu-carousel-item',
  setup() {
    // 进行依赖注入
    const injectObj: IIdenProvide = inject<IIdenProvide>('componentIden')
    const currentComponentIden = ref(0)
    const { currentCheckedIndex } = injectObj
    const { direction } = injectObj

    // 组件被创建钩子函数
    onMounted(() => {
      currentComponentIden.value = injectObj.componentIden.value
      injectObj.changeIden()
    })

    // -- 计算动画名称
    const transitionName = computed<string>(() =>
      direction === 'horizontal'
        ? 'cu-carousel-item-forward'
        : 'cu-carousel-item-upward'
    )

    return {
      currentComponentIden,
      currentCheckedIndex,
      transitionName
    }
  }
})
</script>
