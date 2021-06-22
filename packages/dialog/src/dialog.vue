<template>
  <transition name = 'cu-dialog-fade'>
    <div :class="classNamePrefix">
      <div :class="dynamicClassName('header')"></div>
      <div :class="dynamicClassName('body')"></div>
      <div :class="dynamicClassName('footer')">

      </div>
    </div>
  </transition>
</template>

<script lang = "ts">
import { computed, defineComponent, PropType } from 'vue'
import { typeFun } from './types'
import { styleCommonPrefix } from '@viewer/utils/types'

export default defineComponent({
  name: 'dialog',
  props: {
    modelValue: {
      type: [ String, Number ],
      default: ''
    },
    title: {
      type: String,
      default: '弹框标题'
    },
    width: {
      type: [ Number, String ],
      default: '50%'
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '15vh'
    },
    type: {
      type: String as PropType<ReturnType<typeof typeFun>>,
      default: 'normal'
    },
    model: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    openDelay: {
      type: Number,
      default: 300
    },
    closeDelay: {
      type: Number,
      default: 300
    },
    beforeClose: {
      type: Function,
      default: () => ({})
    },
    center: {
      type: Boolean,
      default: false
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    visibleTitle: {
      type: Boolean,
      default: true
    },
    visibleFooter: {
      type: Boolean,
      default: true
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const {$namespace, $modifierSeparator} = styleCommonPrefix

    // 动态计算类名
    const dynamicClassName = (label: 'header' | 'body' | 'footer' ) => {
      return computed<string>(() => (`${$namespace}-dialog${$modifierSeparator}${label}`))
    }

    return {
      classNamePrefix: `${$namespace}-dialog`,
      dynamicClassName
    }
  }
})
</script>
