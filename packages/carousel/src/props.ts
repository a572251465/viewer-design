import {PropType} from 'vue'

export default {
  height: {
    type: String,
    default: '200px'
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: 'click'
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 2000
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'card'
  },
  indicatorPosition: {
    type: String as PropType<'outside' | 'none'>,
    default: 'none'
  },
  loop: {
    type: Boolean,
    default: true
  }
}