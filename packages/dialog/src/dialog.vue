<template>
  <transition name = 'cu-dialog-fade'>
    <cu-mask :z-index = "zIndex - 10" v-show = "changeValue" :center = "center"
             @closeHandle = "closeCurrentPage('mask')">
      <!-- 弹框显示内容部分 有head body footer -->
      <div :class = "classNamePrefix" v-if = "!isDirective" :style = "outerStyle">
        <div :class = "dynamicClassName('header')"
             v-if = "visibleHeader">
          <span>{{ title }}</span>
          <i class = "cu-icon-close" @click = "closeCurrentPage"></i>
        </div>
        <div :class = "dynamicClassName('body')" :style = '{height: height + "px"}'>
          <slot></slot>
        </div>
        <div :class = "dynamicClassName('footer')"
             v-if = "visibleFooter">
          <cu-button class = "cu-dialog--footer-btn" size = "small" type = "text" @click = "closeCurrentPage">取消
          </cu-button>
          <cu-button class = "cu-dialog--footer-btn" size = "small">确定</cu-button>
        </div>
      </div>
      <!-- 弹框确认部分 直接通过指令来实现 -->
      <div :class = "classNamePrefix" :style = "outerStyle" v-else>

      </div>
    </cu-mask>
  </transition>
</template>

<script lang = "ts">
import { computed, defineComponent, PropType, watch } from 'vue'
import { IBeforeClose, typeFun } from './types'
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
    top: {
      type: String,
      default: '15vh'
    },
    type: {
      type: String as PropType<ReturnType<typeof typeFun>>,
      default: 'normal'
    },
    closeOnClickModel: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    beforeClose: {
      type: Function as PropType<IBeforeClose>,
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
    watch(() => props.modelValue, value => {
      if ( !value ) {
        commonCloseHandle()
        return
      }
      let timer = setTimeout(() => {
        changeValue.value = value
        clearTimeout(timer)
        timer = null
      }, props.openDelay)
    })

    // 计算外部弹框显示的样式
    const outerStyle = computed<object>(() => ({
      width: computedUnit<string | number>(props.width),
      height: 'auto',
      top: props.center ? '0px' : props.top,
      ...props.styles,
      zIndex
    }))

    /**
     * @author lihh
     * @description 表示共同的关闭弹框的处理
     *              如果beforeClose 的返回结果是promise的话 reject阻止弹框关闭
     * */
    const commonCloseHandle = () => {
      const setTimeoutHandle = () => {
        let timer = setTimeout(() => {
          changeValue.value = false
          clearTimeout(timer)
          timer = null
        }, props.closeDelay)
      }
      // 执行关闭前的方法
      const result = props.beforeClose()
      if ( typeof result !== 'object' || result === null ) {
        setTimeoutHandle()
        return
      }

      if ( !Reflect.has(result, 'then') || typeof (result as Promise<any>).then !== 'function' ) {
        setTimeoutHandle()
        return
      }

      (result as Promise<any>).then(setTimeoutHandle)
    }

    /**
     * @author lihh
     * @description 点击按钮 || 遮罩层 进行弹框的关闭
     * @param flag 表示是否是遮罩层触发事件
     */
    const closeCurrentPage = (flag) => {
      if ( flag === 'mask' && !props.closeOnClickModel ) return

      commonCloseHandle()
    }

    return {
      classNamePrefix: `${ $namespace }-dialog`,
      dynamicClassName,
      changeValue,
      closeCurrentPage,
      outerStyle,
      zIndex
    }
  }
})
</script>
