<template>
  <div class = "home">
    <Header class = "home-header"></Header>
    <div class = "home-body">
      <Left class = "home-body-left"></Left>
      <Right class = "home-body-right"></Right>
    </div>
  </div>
</template>

<script lang = "ts">
import { defineComponent } from 'vue'
import Header from 'story/components/Header/index.vue'
import Left from 'story/components/Left/index.vue'
import Right from 'story/components/right/index.vue'

export default defineComponent({
  name: 'home',
  components: {
    Header,
    Left,
    Right
  }
})
</script>

<style lang = "scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &-header {
    width: 100%;
    height: 80px;
    margin-bottom: 10px;
  }

  &-body {
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
    box-sizing: border-box;

    &-left {
      height: 100%;
      width: 240px;
    }

    &-right {
      box-sizing: border-box;
      padding-left: 50px;
      flex: 1;
    }
  }
}
</style>
