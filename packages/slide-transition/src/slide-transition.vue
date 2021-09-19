<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter"
    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
    v-on:after-leave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { addClass, removeClass } from '../../utils/dom'

export default defineComponent({
  name: 'cu-slide-transition',
  setup() {
    const beforeEnter = (el) => {
      addClass(el, 'cu-slide-transition')
      if (!el.dataset) el.dataset = {}

      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom

      el.style.height = '0'
      el.style.opacity = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
    const enter = (el) => {
      el.dataset.oldOverflow = el.style.overflow
      if (el.scrollHeight !== 0) {
        el.style.height = `${el.scrollHeight}px`
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
        el.style.opacity = 1
      } else {
        el.style.height = ''
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      }

      el.style.overflow = 'hidden'
    }
    const afterEnter = (el) => {
      removeClass(el, 'cu-slide-transition')
      el.style.height = ''
      el.style.overflow = el.dataset.oldOverflow
    }
    const beforeLeave = (el) => {
      if (!el.dataset) el.dataset = {}
      el.style.height = `${el.scrollHeight}px`
      el.dataset.oldOverflow = el.style.overflow
      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom
      el.style.overflow = 'hidden'
    }
    const leave = (el) => {
      if (el.scrollHeight !== 0) {
        addClass(el, 'cu-slide-transition')
        el.style.height = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      }
    }
    const afterLeave = (el) => {
      removeClass(el, 'cu-slide-transition')
      el.style.height = ''
      el.style.overflow = el.dataset.oldOverflow
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    }

    return {
      beforeEnter,
      enter,
      afterEnter,
      beforeLeave,
      leave,
      afterLeave
    }
  }
})
</script>
