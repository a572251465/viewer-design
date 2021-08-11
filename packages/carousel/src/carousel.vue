<template>
  <div class = "">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang = "ts">
import { defineComponent } from 'vue'
import props from './props'

export default defineComponent({
  name: 'cu-carousel',
  props,
  setup() {

  }
})
</script>
