<template>
  <transition name = 'cu-alert-fade'>
    <div :class = "classes" :style = "styles" v-show = "showFlag">
      <div class = "cu-alert--left" :class = "centerClasses">
        <i :class = "computedIcon" v-if = "showIcon"></i>
        <div class = "cu-alert--left-content">
          <div>{{ title }}</div>
          <slot v-if = "$slots.default"></slot>
        </div>
      </div>
      <div class = "cu-alert--right" v-if = "closable">
        <i class = "cu-icon-close" v-if = "!closeText" @click = "closeHandle"></i>
        <span v-else @click = "closeHandle">{{ closeText }}</span>
      </div>
    </div>
  </transition>
</template>

<script lang = "ts">
import { computed, defineComponent, onMounted, PropType, ref, watch } from 'vue'
import { styleCommonPrefix } from '../../utils/types'

const typeFun = () => 'info' || 'primary' || 'warning' || 'danger' || 'success'

export default defineComponent({
  name: 'cu-alert',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<ReturnType<typeof typeFun>>,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [ 'close' ],
  setup(props, { emit, slots }) {
    const { $namespace, $modifierSeparator, $statePrefix } = styleCommonPrefix,
        classes = computed(() => [
          `${ $namespace }-alert`,
          `${ $namespace }-alert${ $modifierSeparator }${ props.type }`
        ]),
        centerClasses = computed<string>(() => props.center ? `${ $statePrefix }center` : '')

    // 表示关闭事件
    const closeHandle = () => {
      emit('close')
      showFlag.value = false
    }

    // 计算显示icon内容
    const computedIcon = computed<string>(() => props.showIcon ? `cu-icon-${ props.type === 'primary' ? 'success' : props.type }` : '')

    // 动画显隐
    const showFlag = ref<boolean>(false)
    onMounted(() => showFlag.value = true)

    return {
      classes,
      closeHandle,
      computedIcon,
      centerClasses,
      showFlag
    }
  }
})
</script>
