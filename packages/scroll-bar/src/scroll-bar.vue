<template>
  <div class = "cu-scroll-bar">
    <slot></slot>

    <cu-bar></cu-bar>
  </div>
</template>

<script lang = "ts">
import {defineComponent} from 'vue'
import CuBar from './bar'

export default defineComponent({
  name: 'cu-scroll-bar',
  components: {CuBar},
  setup() {
    return {}
  }
})
</script>
