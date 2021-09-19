import { defineComponent, h } from 'vue'
import { styleCommonPrefix } from '../../utils/types'

export default defineComponent({
  name: 'cu-layout',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.tag,
        { class: `${styleCommonPrefix.$namespace}-layout` },
        slots.default()
      )
  }
})
