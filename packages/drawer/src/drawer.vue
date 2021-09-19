<template>
  <transition
    name="cu-drawer-fade"
    @before-enter="$emit('open')"
    @after-enter="$emit('opened')"
    @before-leave="$emit('close')"
    @after-leave="$emit('closed')"
  >
    <cu-mask
      :zIndex="ComputedZIndex - 10"
      v-show="showFlag"
      @closeHandle="maskCloseHandle"
    >
      <div :class="classes" :style="styles" @click.stop="() => {}">
        <div class="cu-drawer--title" v-if="!$slots.title">
          <div class="content">
            {{ title }}
          </div>
          <i
            class="cu-icon-close"
            v-if="showClose"
            @click.stop="closeBtnHandle"
          ></i>
        </div>
        <div v-else>
          <slot name="title"></slot>
        </div>
        <div class="cu-drawer--body">
          <slot></slot>
        </div>
      </div>
    </cu-mask>
  </transition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  PropType,
  watch
} from 'vue'
import CuMask from '@viewer/mask'
import { $selfDialog } from '@viewer/dialog'
import useZIndex from '../../use/useZIndex'
import { styleCommonPrefix } from '../../utils/types'
import useModel from '../../use/useModel'
import useEscLeave from '../../use/useEscLeave'

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
      default: false
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
      default: false
    },
    size: {
      type: [String, Number],
      default: '40'
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
  emits: ['open', 'opened', 'close', 'closed', 'update:modelValue'],
  setup(props, { emit }) {
    const { $namespace, $statePrefix } = styleCommonPrefix
    const ComputedZIndex = props.zIndex || useZIndex()
    const classes = computed(() => [
      `${$namespace}-drawer`,
      `${$statePrefix}${props.direction}`,
      `${$namespace}-drawer-animation-${props.direction}`
    ])
    const computedWidth = computed<string>(() =>
      typeof props.size === 'number' ? `${props.size}px` : `${props.size}%`
    )
    const isWidth = computed<boolean>(() =>
      ['bottom', 'top'].includes(props.direction)
    )
    const styles = computed<object>(() => ({
      [isWidth.value ? 'height' : 'width']: computedWidth.value,
      [isWidth.value ? 'width' : 'height']: '100%'
    }))
    const showFlag = useModel(props.modelValue, (val) =>
      emit('update:modelValue', val)
    )

    watch(
      () => props.modelValue,
      (value) => {
        if (value) showFlag.value = true
      }
    )

    // 点击遮罩层关闭事件
    const maskCloseHandle = () => {
      if (!props.clickMaskClose) return
      showFlag.value = false
    }

    let bindKeyHandle = null
    onMounted(() => {
      if (props.closeOnPressEscape) {
        bindKeyHandle = useEscLeave(maskCloseHandle)
      }
    })
    onBeforeUnmount(
      () => props.closeOnPressEscape && bindKeyHandle && bindKeyHandle()
    )

    // 点击关闭按钮
    const closeBtnHandle = () => {
      Promise.resolve(props.beforeClose()).then(() => {
        $selfDialog.confirm({
          message: '确定要关闭吗',
          ok: () => (showFlag.value = false)
        })
      })
    }

    return {
      ComputedZIndex,
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
