<template>
  <transition name = "cu-message-fade" @after-leave = "onClose">
    <div :class = "classes" v-show = "showFlag" :style = "customStyle">
      <div class = "cu-message-container" :class = "centerClasses">
        <i :class = "iconClass" class = "tips"></i>
        <span v-if = "!isSupportHtml" class = "selfSpan">
          {{ message }}
        </span>
        <span v-else v-html = "message"></span>
      </div>
      <i
          v-if = "showClose"
          class = "cu-icon-close cu-message--closeBtn"
          @click = "showFlag = false"
      ></i>
    </div>
  </transition>
</template>

<script lang = "ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  ref,
  watch
} from 'vue'
import { styleCommonPrefix } from '@viewer/utils/types'
import { IType } from './types'
import { useZIndex } from '@viewer/use/useZIndex'

export default defineComponent({
  name: 'cu-message',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String as PropType<IType>,
      default: 'success'
    },
    iconClass: {
      type: String,
      default: ''
    },
    isSupportHtml: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function,
      default: () => ({})
    },
    offset: {
      type: Number,
      default: 20
    },
    delay: {
      type: Number,
      default: 2000
    }
  },
  emits: [ 'destroy' ],
  setup(props, { emit }) {

    // 获取计算悬浮层
    const zIndex = useZIndex()

    // 计算样式
    const commonPrefix = `${ styleCommonPrefix.$namespace }-message`,
        classes = computed<(string | object)[]>(() => [
          commonPrefix,
          [ commonPrefix, styleCommonPrefix.$modifierSeparator, props.type ].join('')
        ]),
        centerClasses = computed<(string | object)[]>(() => [
          {
            [styleCommonPrefix.$statePrefix + 'center']: props.center
          }
        ]),
        iconClass = computed<string>(() => `cu-icon-${ props.iconClass }`),
        customStyle = computed(() => ({
          top: `${ props.offset }px`,
          zIndex
        }))

    const showFlag = ref(false)

    onUnmounted(() => (showFlag.value = false))
    watch(
        () => showFlag,
        (val) => {
          if ( !val ) emit('destroy')
        }
    )

    onMounted(() => {
      showFlag.value = true

      let timer = setTimeout(() => {
        showFlag.value = false
        clearTimeout(timer)
        timer = null
      }, props.delay)
    })

    return {
      commonPrefix,
      classes,
      iconClass,
      showFlag,
      customStyle,
      centerClasses
    }
  }
})
</script>
