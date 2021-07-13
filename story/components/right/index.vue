<template>
  <div>
    <router-view name="child"></router-view>
  </div>
</template>

<script lang = "ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'right',
  setup() {

  }
})
</script>
