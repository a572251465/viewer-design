<template>
  <button
    :class="classes"
    :style="styles"
    type="button"
    @click.stop="emitClickHandle"
  >
    <i :class="displayIcon" v-if="loading || icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { styleCommonPrefix } from '../../utils/types'

const sizeClassify = () => 'medium' || 'small' || 'mini' || 'big'
const typeClassify = () =>
  'primary' || 'success' || 'warning' || 'danger' || 'info' || 'text'
type ISize = ReturnType<typeof sizeClassify>
type IType = ReturnType<typeof typeClassify>

export default defineComponent({
  name: 'cu-button',
  props: {
    size: {
      type: String as PropType<ISize>,
      default: 'medium'
    },
    type: {
      type: String as PropType<IType>,
      default: 'primary'
    },
    // 圆角
    round: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    // 圆圈
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    // 设置共同的样式
    const classes = computed(() => {
      const commonPrefix = `${styleCommonPrefix.$namespace}-button`
      const modifierSeparator = styleCommonPrefix.$modifierSeparator
      const statePrefix = styleCommonPrefix.$statePrefix
      return [
        commonPrefix,
        [
          commonPrefix,
          modifierSeparator,
          props.circle ? 'mini' : props.size
        ].join(''),
        [commonPrefix, modifierSeparator, props.type].join(''),
        {
          [`${statePrefix}disabled`]: props.disabled,
          [`${statePrefix}round`]: props.round,
          [`${statePrefix}circle`]: props.circle,
          [`${statePrefix}loading`]: props.loading || props.icon === 'loading',
          [`${statePrefix}normal`]:
            !props.loading && !props.disabled && props.icon !== 'loading'
        }
      ]
    })
    // 计算显示的图标
    const displayIcon = computed<string>(
      () => `cu-icon-${props.loading ? 'loading' : props.icon}`
    )

    // 按钮点击事件
    const emitClickHandle = (event) => {
      emit('click', event)
    }

    return {
      classes,
      displayIcon,
      emitClickHandle
    }
  }
})
</script>
