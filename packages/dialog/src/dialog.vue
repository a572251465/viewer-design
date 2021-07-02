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
          <cu-button class = "cu-dialog--footer-btn" size = "small" @click = "sureHandle">确定</cu-button>
        </div>
      </div>
      <!-- 弹框确认部分 直接通过指令来实现 -->
      <div :class = "classNamePrefix + '-confirm'"
           :style = "{...outerStyle, width: width}"
           v-else
      >
        <div :class = "dynamicClassName('header')">
          <i :class = "computedIconClass"></i>
          <span>{{ title }}</span>
        </div>
        <div :class = "dynamicClassName('body')">
          <span v-if = "!isSupportHtml">{{ message }}</span>
          <div v-else v-html = "message"></div>
        </div>
        <div :class = "[dynamicClassName('footer')]">
          <cu-button
              v-show = "type === 'confirm'"
              :styles = "btnStyle"
              :class = "dynamicClassName('footer-btn')"
              @click = "sureOrCancelHandle('cancel')"
              type = "text">取消
          </cu-button>
          <cu-button
              :styles = "btnStyle"
              @click = "sureOrCancelHandle('sure')"
              :class = "dynamicClassName('footer-btn')">确定
          </cu-button>
        </div>
      </div>
    </cu-mask>
  </transition>
</template>

<script lang = "ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, PropType, watch } from 'vue'
import { IBeforeClose, typeFun } from './types'
import { styleCommonPrefix } from '@viewer/utils/types'
import CuButton from '@viewer/button'
import CuMask from '@viewer/mask'
import { useModel } from '@viewer/use/useModel'
import { computedUnit } from './dialog-directive'
import { useZIndex } from '@viewer/use/useZIndex'
import { useEscLeave } from '@viewer/use/useEscLeave'

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
      default: 'info'
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
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 0
    },
    message: {
      type: String,
      default: ''
    },
    isSupportHtml: {
      type: Boolean,
      default: false
    },
    ok: {
      type: Function,
      default: () => {
      }
    },
    cancel: {
      type: Function,
      default: () => {
      }
    }
  },
  emits: [ 'update:modelValue', 'sure-event' ],
  setup(props, { emit }) {
    const { $namespace, $modifierSeparator } = styleCommonPrefix

    // 获取默认的悬浮层
    const zIndex = props.zIndex || useZIndex()

    // 动态计算类名
    const dynamicClassName = (label: 'header' | 'body' | 'footer' | any) => {
      return `${ $namespace }-dialog${ props.isDirective ? '-confirm' : '' }${ $modifierSeparator }${ label }`
    }

    // 设置modelValue 为v-model属性
    const changeValue = useModel(props.modelValue, val => emit('update:modelValue', val))
    watch(() => props.modelValue, value => {
      if ( !value ) {
        commonCloseHandle()
        return
      }
      openDelayHandle(value)
    })

    // 延迟打开弹框处理
    const openDelayHandle = (value) => {
      let timer = setTimeout(() => {
        changeValue.value = value
        clearTimeout(timer)
        timer = null
      }, props.openDelay)
    }

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
    const commonCloseHandle = (callback?) => {
      if ( !callback ) callback = Function.prototype
      const setTimeoutHandle = () => {
        let timer = setTimeout(() => {
          changeValue.value = false
          clearTimeout(timer)
          timer = null
          callback()
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

    // 计算icon样式
    const computedIconClass = computed<string[]>(() => [
      `cu-icon-${ props.type }`,
      `${ $namespace }-dialog${ $modifierSeparator }${ props.type }`
    ])

    // 点击弹框的确认按钮
    const sureHandle = () => emit('sure-event')

    // 询问框 点击打开 或是 关闭按钮
    const sureOrCancelHandle = (type) => {
      commonCloseHandle(type === 'sure' ? props.ok : props.cancel)
    }

    let bindHandle = null
    onMounted(() => {
      if ( props.isDirective ) openDelayHandle(true)
      // 按键{esc} 进行弹框关闭
      if ( props.closeOnPressEscape ) {
        bindHandle = useEscLeave(() => closeCurrentPage('mask'))
      }
    })
    onBeforeUnmount(() => props.closeOnPressEscape && bindHandle && bindHandle())

    return {
      classNamePrefix: `${ $namespace }-dialog`,
      dynamicClassName,
      changeValue,
      closeCurrentPage,
      outerStyle,
      zIndex,
      computedIconClass,
      btnStyle: { width: '60px', height: '32px', lineHeight: '32px' },
      sureHandle,
      sureOrCancelHandle
    }
  }
})
</script>
