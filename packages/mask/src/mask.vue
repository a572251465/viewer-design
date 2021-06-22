<template>
  <div class = "cu-mask" :style = "styles" @click = "closeHandle">
    <slot></slot>
  </div>
</template>

<script lang = "ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'cu-mask',
  props: {
    zIndex: {
      type: Number,
      default: 1000
    }
  },
  emits: [ 'closeHandle' ],
  setup(props, { emit }) {
    const styles = computed(() => ({
          zIndex: props.zIndex
        })),
        closeHandle = () => {
          emit('closeHandle')
        }

    return {
      styles,
      closeHandle
    }
  }
})
</script>
