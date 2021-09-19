<template>
  <div :class="classes"></div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { styleCommonPrefix } from '../../utils/types'

export default defineComponent({
  name: 'cu-bar',
  props: {
    pos: {
      type: String as PropType<'vertical' | 'horizontal'>,
      default: 'vertical'
    }
  },
  setup(props) {
    const { $statePrefix } = styleCommonPrefix

    const classes = computed<string[]>(() => [
      'cu-bar',
      [$statePrefix, props.pos].join('')
    ])

    return {
      classes
    }
  }
})
</script>
