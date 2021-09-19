<template>
  <a
    :href="computedHref"
    :class="classes"
    @click="linkClickHandle"
    :target="target"
  >
    <i :class="fontIcon" v-if="fontIcon"></i>
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { styleCommonPrefix } from '../../utils/types'

const typeFun = () => 'primary' || 'success' || 'info' || 'danger' || 'warning'

export default defineComponent({
  name: 'cu-link',
  props: {
    type: {
      type: String as PropType<ReturnType<typeof typeFun>>,
      default: 'info'
    },
    underline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    target: {
      type: String as PropType<'_self' | '_blank' | '_parent' | '_top'>,
      default: '_self'
    }
  },
  emits: ['on-click'],
  setup(props, { emit }) {
    const { $namespace, $modifierSeparator, $statePrefix } = styleCommonPrefix
    const classes = computed(() => [
      `${$namespace}-link`,
      `${$namespace}-link${$modifierSeparator}${props.type}`,
      {
        [`${$statePrefix}disabled`]: props.disabled,
        [`${$statePrefix}underline`]: props.underline
      }
    ])
    const fontIcon = computed<string>(() =>
      !props.icon ? '' : `cu-icon-${props.icon}`
    )
    const computedHref = computed<string>(() =>
      props.href && !props.disabled ? props.href : 'javascript:void(0);'
    )

    const linkClickHandle = () => {
      if (props.disabled) return
      emit('on-click')
    }

    return {
      classes,
      fontIcon,
      computedHref,
      linkClickHandle
    }
  }
})
</script>
