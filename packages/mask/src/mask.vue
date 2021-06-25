<template>
  <div class = "cu-mask" :style = "styles" :class = "classes" @click = "closeHandle">
    <slot></slot>
  </div>
</template>

<script lang = "ts">
import { computed, defineComponent } from 'vue'
import { styleCommonPrefix } from '@viewer/utils/types'

export default defineComponent({
  name: 'cu-mask',
  props: {
    zIndex: {
      type: Number,
      default: 1000
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  emits: [ 'closeHandle' ],
  setup(props, { emit }) {
    const styles = computed(() => ({
          zIndex: props.zIndex
        })),
        classes = computed<object>(() => [
          {
            [`${ styleCommonPrefix.$statePrefix }center`]: props.center
          }
        ]),
        closeHandle = () => {
          emit('closeHandle')
        }

    return {
      styles,
      closeHandle,
      classes
    }
  }
})
</script>
