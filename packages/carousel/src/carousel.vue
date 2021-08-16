<template>
  <div class = "cu-carousel" :style="styles">
    <div class="view-port" @mouseover="mouseHoverOrLeaveHandle(true)" @mouseleave="mouseHoverOrLeaveHandle(false)">
      <slot></slot>
      <!-- 表示左右按钮 -->
      <transition name = 'left-btn'>
        <button class="left-btn" v-show="isHover">
          <i class="cu-icon-left"></i>
        </button>
      </transition>
      <transition name = 'right-btn'>
        <button class="right-btn" v-show="isHover">
          <i class="cu-icon-right"></i>
        </button>
      </transition>
    </div>
  </div>
  <ul class="cu-carousel-tips" @mouseover="mouseHoverOrLeaveHandle(true)" @mouseleave="mouseHoverOrLeaveHandle(false)" >
    <li v-for="item in len" :key = 'item' class="cu-carousel-tips-detail">
      <button :class="[currentCheckedIndex + 1 === item ? 'active' : '']" @click="goSwiper(item - 1)"></button>
    </li>
  </ul>
</template>

<script lang = "ts">
import { computed, defineComponent, onMounted, onUnmounted, provide, ref } from 'vue'
import props from './props'
import {IIdenProvide} from './types'
let loopTimer = null
// -- 表示开始时间
let startTime = 0
let endTime = 0

export default defineComponent({
  name: 'cu-carousel',
  props,
  setup(props) {
    // 计算高度的样式
    const styles = computed<Object>(() => ({
      height: props.height
    }))
    // 表示当前选择的组件
    const currentCheckedIndex = ref(props.initialIndex)
    // -- 判断是否悬浮
    const isHover = ref<boolean>(false)
    // 表示子组件的身份认证
    const componentIden = ref(0)
    const changeIden = () => {
      ++ componentIden.value
    }
    // 方法注入传递给子组件
    provide<IIdenProvide>('componentIden', {
      currentCheckedIndex,
      componentIden,
      changeIden
    })
    // 所有组件的总个数
    const len = computed<number>(() => componentIden.value)
    // 切换轮播图的计算方法
    const goSwiper = (index) => {
      // -- 判断是否已经到了临界点 但是不会循环播放
      if ((index === len.value || index < 0) && !props.loop) {
        return false
      }

      if (index === len.value) {
        index = 0
      }
      if (index < 0) {
        index = len.value - 1
      }
      currentCheckedIndex.value = index
    }

    // -- 表示开始执行轮播
    const startExec = () => {
      // -- 判断是否自动轮播
      if (props.autoplay) {
        loopTimer = setInterval(() => {
          goSwiper(currentCheckedIndex.value + 1)
        }, props.interval)
      }
    }

    // -- 鼠标悬浮/ 离开view-port事件
    const mouseHoverOrLeaveHandle = (status: boolean) => {
      isHover.value = status
      if (status) {
        // -- 设置开始悬浮的时间
        startTime = + new Date()
        if (loopTimer) {
          clearInterval(loopTimer)
          loopTimer = null
        }
      } else {
        // -- 设置鼠标离开的时间
        endTime = + new Date()
        // -- 判断用户是否悬浮后 立即离开
        if (endTime - startTime < 1000) {
          // -- 开始重新执行 如果开始执行 立马执行下一个
          goSwiper(currentCheckedIndex.value + 1)
        }
        startExec()
      }
    }

    // -- 手动执行swiper
    const manualGoSwiper = (index: number) => {

    }

    // 组件加载钩子函数
    onMounted(() => {
      // -- 表示开始执行
      startExec()
    })
    onUnmounted(() => {
      if (loopTimer) {
        clearInterval(loopTimer)
        loopTimer = null
      }
    })

    return {
      styles,
      len,
      currentCheckedIndex,
      mouseHoverOrLeaveHandle,
      goSwiper,
      manualGoSwiper,
      isHover
    }
  }
})
</script>
