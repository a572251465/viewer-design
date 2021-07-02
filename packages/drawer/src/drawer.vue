<template>
  <transition name = 'cu-drawer-fade' @before-enter = '$emit("open")' @after-enter = '$emit("opened")'
              @before-leave = '$emit("close")' @after-leave = '$emit("closed")'>
    <cu-mask :zIndex = "zIndex - 10" v-show = "showFlag" @closeHandle = 'maskCloseHandle'>
      <div :class = "classes" :style = "styles">
        <div class = "cu-drawer--title" v-if = "!$slots.title">
          <div class = "content">
            {{ title }}
          </div>
          <i class = "cu-icon-close" v-if = "showClose" @click.stop = "closeBtnHandle"></i>
        </div>
        <div v-else>
          <slot name = "title"></slot>
        </div>
        <div class = "cu-drawer--body">
          <slot></slot>
        </div>
      </div>
    </cu-mask>
  </transition>
</template>

<script lang = 'ts'>
import { computed, defineComponent, onBeforeUnmount, onMounted, PropType, watch } from 'vue'
import CuMask from '@viewer/mask'
import { useZIndex } from '@viewer/use/useZIndex'
import { styleCommonPrefix } from '@viewer/utils/types'
import { useModel } from '@viewer/use/useModel'
import { selfDialogDirective } from '@viewer/dialog'
import { useEscLeave } from '@viewer/use/useEscLeave'

export interface IBeforeClose {
  (): any | Promise<any>
}

export default defineComponent({
  name: 'cu-drawer',
  components: {
    CuMask
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function as PropType<IBeforeClose>,
      default: () => ({})
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String as PropType<'bottom' | 'top' | 'right' | 'left'>,
      default: 'right'
    },
    showClose: {
      type: Boolean,
      default: true
    },
    clickMaskClose: {
      type: Boolean,
      default: true
    },
    size: {
      type: [ String, Number ],
      default: '30'
    },
    zIndex: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    }
  },
  emits: [ 'open', 'opened', 'close', 'closed', 'update:modelValue' ],
  setup(props, { emit }) {

    const { $namespace, $statePrefix } = styleCommonPrefix
    const zIndex = props.zIndex || useZIndex(),
        classes = computed(() => [
          `${ $namespace }-drawer`,
          `${ $statePrefix }${ props.direction }`
        ]),
        computedWidth = computed<string>(() => typeof props.size === 'number' ? props.size + 'px' : props.size + '%'),
        isWidth = computed<boolean>(() => [ 'bottom', 'top' ].includes(props.direction)),
        styles = computed<object>(() => ({
          [isWidth ? 'width' : 'height']: computedWidth.value,
          [isWidth ? 'height' : 'width']: '100%'
        })),
        showFlag = useModel(props.modelValue, val => emit('update:modelValue', val))

    watch(() => props.modelValue, value => {
      if ( value ) showFlag.value = true
    })

    // 点击遮罩层关闭事件
    const maskCloseHandle = () => {
      if ( !props.clickMaskClose ) return
      showFlag.value = false
    }

    let bindKeyHandle = null
    onMounted(() => {
      if ( props.closeOnPressEscape ) {
        bindKeyHandle = useEscLeave(maskCloseHandle)
      }
    })
    onBeforeUnmount(() => bindKeyHandle && bindKeyHandle())

    // 点击关闭按钮
    const closeBtnHandle = () => {
      Promise.resolve(props.beforeClose()).then(() => {
        selfDialogDirective.confirm({
          message: '确定要关闭吗',
          ok: () => showFlag.value = false
        })
      })
    }

    return {
      zIndex,
      classes,
      computedWidth,
      isWidth,
      showFlag,
      styles,
      maskCloseHandle,
      closeBtnHandle
    }
  }
})
</script>
