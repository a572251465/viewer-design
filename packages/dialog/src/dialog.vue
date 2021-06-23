<template>
  <transition name = 'cu-dialog-fade'>
    <div v-show = "changeValue">
      <cu-mask :z-index = "zIndex - 10"></cu-mask>
      <!-- 弹框显示内容部分 有head body footer -->
      <div :class = "classNamePrefix" v-if = "!isDirective" :style = "outerStyle">
        <div :class = "dynamicClassName('header')"
             v-if = "visibleHeader">
          <span>{{ title }}</span>
          <i class = "cu-icon-close"></i>
        </div>
        <div :class = "dynamicClassName('body')" :style = '{height: height + "px"}'>
          <slot></slot>
        </div>
        <div :class = "dynamicClassName('footer')"
             v-if = "visibleFooter">
          <cu-button class = "cu-dialog--footer-btn" size = "small" type = "text">取消</cu-button>
          <cu-button class = "cu-dialog--footer-btn" size = "small">确定</cu-button>
        </div>
      </div>
      <!-- 弹框确认部分 直接通过指令来实现 -->
      <div :class = "classNamePrefix" :style = "outerStyle" v-else>

      </div>
    </div>
  </transition>
</template>

<script lang = "ts">
import { computed, defineComponent, PropType, watch } from 'vue'
import { typeFun } from './types'
import { styleCommonPrefix } from '@viewer/utils/types'
import CuButton from '@viewer/button'
import CuMask from '@viewer/mask'
import { useModel } from '@viewer/use/useModel'
import { computedUnit } from './dialog'
import { useZIndex } from '@viewer/use/useZIndex'

export default defineComponent({
  name: 'cu-dialog',
  components: {
    CuButton,
    CuMask
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '弹框标题'
    },
    width: {
      type: [ Number, String ],
      default: '50%'
    },
    height: {
      type: [ Number, String ],
      default: 'auto'
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '15vh'
    },
    type: {
      type: String as PropType<ReturnType<typeof typeFun>>,
      default: 'normal'
    },
    model: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    openDelay: {
      type: Number,
      default: 300
    },
    closeDelay: {
      type: Number,
      default: 300
    },
    beforeClose: {
      type: Function,
      default: () => ({})
    },
    center: {
      type: Boolean,
      default: false
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    visibleHeader: {
      type: Boolean,
      default: true
    },
    visibleFooter: {
      type: Boolean,
      default: true
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    isDirective: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  emits: [ 'update:modelValue' ],
  setup(props, { emit }) {
    const { $namespace, $modifierSeparator } = styleCommonPrefix

    // 获取默认的悬浮层
    const zIndex = props.zIndex || useZIndex()

    // 动态计算类名
    const dynamicClassName = (label: 'header' | 'body' | 'footer') => {
      return `${ $namespace }-dialog${ $modifierSeparator }${ label }`
    }

    // 设置modelValue 为v-model属性
    const changeValue = useModel(props.modelValue, val => emit('update:modelValue', val))
    watch(() => props.modelValue, value => changeValue.value = value)

    // 计算外部弹框显示的样式
    const outerStyle = computed<object>(() => ({
      width: props.fullscreen ? '100%' : computedUnit<string | number>(props.width),
      height: props.fullscreen ? '100%' : 'auto',
      top: props.center ? '50%' : props.top,
      transform: `translate(-50%, ${ props.center ? '-50%' : '0%' })`,
      ...props.styles,
      zIndex
    }))
    return {
      classNamePrefix: `${ $namespace }-dialog`,
      dynamicClassName,
      changeValue,
      outerStyle,
      zIndex
    }
  }
})
</script>
