<template>
  <div class="cu-time-line-item">
    <div class="cu-time-line-item__left" :style="{ width: leftWidth }">
      <div
        class="cu-time-line-item--spot"
        :class="spotClasses"
        :style="spotStyle"
      >
        <i :class="iconContent" v-if="iconContent"></i>
      </div>
      <div class="cu-time-line-item--line"></div>
    </div>
    <div
      class="cu-time-line-item__right"
      :class="rightClasses"
      :style="rightStyles"
    >
      <div class="cu-time-line-item--timestamp" v-if="!hideTimestamp">
        {{ timestamp }}
      </div>
      <div class="cu-time-line-item--content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, inject } from 'vue'
import { globalContext, styleCommonPrefix } from '../../utils/types'

type ISize<T extends string> = { [p in T]: number }

const sizeMap: ISize<'medium' | 'big'> = {
  medium: 12,
  big: 16
}

export default defineComponent({
  name: 'cu-time-line-item',
  props: {
    timestamp: {
      type: String,
      default: ''
    },
    hideTimestamp: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String as PropType<'top' | 'bottom'>,
      default: 'bottom'
    },
    type: {
      type: String as PropType<
        'primary' | 'success' | 'warning' | 'danger' | 'info'
      >,
      default: 'info'
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String as PropType<'medium' | 'big'>,
      default: 'medium'
    },
    icon: {
      type: String,
      default: ''
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const injectContent = inject<string>(globalContext.timeLine)
    if (!injectContent) {
      console.warn(
        `The element cu-time-line-item must be included by cu-time-line`
      )
    }
    const { $namespace, $modifierSeparator, $statePrefix } = styleCommonPrefix
    const preSuffix = `${$namespace}-time-line-item${$modifierSeparator}`
    const spotClasses = computed<string[]>(() => [
      [preSuffix, props.type].join(''),
      [preSuffix, props.size].join('')
    ])
    const spotStyle = computed(() => ({
      background: props.color,
      ...props.styles
    }))

    const rightClasses = computed<string[]>(() => [
      [$statePrefix, props.placement].join('')
    ])
    const rightStyles = computed(() => ({
      marginLeft: `${sizeMap[props.size] + 3}px`
    }))

    const iconContent = computed<string>(() =>
      props.icon ? `cu-icon-${props.icon}` : ''
    )

    return {
      spotClasses,
      spotStyle,
      leftWidth: `${sizeMap[props.size]}px`,
      rightClasses,
      iconContent,
      rightStyles
    }
  }
})
</script>
