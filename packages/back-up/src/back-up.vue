<template>
  <transition name = 'cu-back-up-fade'>
    <div class = "cu-back-up" :style = "styles" v-if = "visible" @click = "clickHandle">
      <span v-if = "!$slots.default">UP</span>
      <slot></slot>
    </div>
  </transition>
</template>

<script lang = "ts">
import { computed, defineComponent, onBeforeMount, onMounted, reactive, ref } from 'vue'
import { off, on } from '../../utils/dom'
import { throttle } from '../../utils/tool'
import { easeInOutCubic } from '../../utils/animation'

interface IProps {
  visibilityHeight: number,
  right: number,
  bottom: number
}

interface IResult {
  visibilityHeight: number | undefined,
  left: number | undefined,
  top: number | undefined,
  actualLeft: number
}

const computedPos = (el: HTMLDivElement | HTMLElement, props: IProps): IResult => {
  const { left: actualLeft, height, bottom, right } = el.getBoundingClientRect()
  const visibilityHeight = height > props.visibilityHeight ? props.visibilityHeight : 10
  const left = right - props.right
  const top = bottom - props.bottom
  return {
    visibilityHeight,
    left,
    top,
    actualLeft
  }
}

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
    idealLeft: {
      type: Number,
      default: 30
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [ 'complete' ],
  setup(props, { emit }) {
    // 设置元素的可见性
    let el = ref<HTMLElement | null>(null),
        visible = ref<boolean>(false),
        computedPosResult = reactive<IResult>({}),
        isWindowScroll = ref<boolean>(false)

    // 设置样式
    const styles = computed(() => ({
      left: `${ computedPosResult.left }px`,
      top: `${ computedPosResult.top }px`,
      ...props.styles
    }))

    const onScroll = () => {
      visible.value = el.value.scrollTop >= computedPosResult.visibilityHeight
    }

    const windowScroll = () => {
      if ( el.value ) {
        const { visibilityHeight, left, top } = computedPos(el.value, props)
        computedPosResult.visibilityHeight = visibilityHeight
        computedPosResult.left = left
        computedPosResult.top = top
      }
    }

    const throttledScrollHandler = throttle(onScroll, 16)
    const windowScrollHandler = throttle(windowScroll, 0)
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

      const { visibilityHeight, left, top, actualLeft } = computedPos(el.value, props)
      computedPosResult.visibilityHeight = visibilityHeight
      computedPosResult.left = left
      computedPosResult.top = top

      // 判断是否需要window滚动
      isWindowScroll.value = actualLeft >= props.idealLeft

      on(el.value, 'scroll', throttledScrollHandler)
      if ( isWindowScroll.value ) on(window.document.body, 'scroll', windowScrollHandler)
    })
    onBeforeMount(() => {
      off(el.value, 'scroll', throttledScrollHandler)
      if ( isWindowScroll.value ) off(window.document.body, 'scroll', windowScrollHandler)
    })

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
