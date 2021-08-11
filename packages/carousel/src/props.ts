export default {
  height: {
    type: String,
    required: true
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  trigger: {
    type: String,
    default: 'click'
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3000
  },
  type: {
    type: String,
    default: 'card'
  },
  loop: {
    type: Boolean,
    default: true
  }
}