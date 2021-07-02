<template>
  <transition name = 'cu-back-up-fade'>
    <div class = "cu-back-up" :style = "styles" v-if = "visible" @click = "clickHandle">
      <span v-if = "!$slots.default">UP</span>
      <slot></slot>
    </div>
  </transition>
</template>

<script lang = "ts">
import { computed, defineComponent, onBeforeMount, onMounted, ref } from 'vue'
import { off, on } from '@viewer/utils/dom'
import { throttle } from '@viewer/utils/tool'
import { easeInOutCubic } from '@viewer/utils/animation'

export default defineComponent({
  name: 'cu-back-up',
  props: {
    target: {
      type: [ String, Object ],
      required: true
    },
    visibilityHeight: {
      type: Number,
      default: 200
    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 100
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [ 'complete' ],
  setup(props, { emit }) {
    // 设置元素的可见性
    let el = ref<HTMLElement | null>(null),
        visible = ref<boolean>(false)

    // 设置样式
    const styles = computed(() => ({
      right: `${ props.right }px`,
      bottom: `${ props.bottom }px`,
      ...props.style
    }))

    const onScroll = () => {
      visible.value = el.value.scrollTop >= props.visibilityHeight
    }

    const throttledScrollHandler = throttle(onScroll, 100)
    onMounted(() => {
      el.value = document.documentElement
      if ( typeof props.target === 'string' ) {
        el.value = document.querySelector(props.target)!
        if ( !el.value ) {
          throw new Error(`target is not existed: ${ props.target }`)
        }
      } else {
        el.value = props.target as HTMLElement
      }
      on(el.value, 'scroll', throttledScrollHandler)
    })
    onBeforeMount(() => off(el.value, 'scroll', throttledScrollHandler))

    const scrollToTop = () => {
      const beginTime = Date.now(),
          beginValue = el.value.scrollTop,
          // 利用requestAnimationFrame 是动画变化的频率 跟浏览器绘制的频率保持一致
          rAF = window.requestAnimationFrame || (fun => setTimeout(fun, 16))
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500
        if ( progress < 1 ) {
          el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress))
          rAF(frameFunc)
        } else {
          el.value.scrollTop = 0
          visible.value = false
          emit('complete')
        }
      }
      rAF(frameFunc)
    }
    const clickHandle = () => {
      scrollToTop()
    }

    return {
      styles,
      visible,
      clickHandle
    }
  }
})
</script>
