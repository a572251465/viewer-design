<template>
  <div class = "home" id = "home">
    <Header class = "home-header"></Header>
    <div class = "home-body">
      <Left class = "home-body-left"></Left>
      <Right class = "home-body-right"></Right>
    </div>
  </div>
  <Nav></Nav>
</template>

<script lang = "ts">
import { defineComponent } from 'vue'
import Header from 'story/components/Header/index.vue'
import Left from 'story/components/Left/index.vue'
import Right from 'story/components/right/index.vue'
import Nav from 'story/components/Nav/index.vue'

export default defineComponent({
  name: 'home',
  components: {
    Header,
    Left,
    Right,
    Nav
  }
})
</script>

<style lang = "scss" scoped>
@import "./index.scss";
</style>
