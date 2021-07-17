import { defineComponent, h, provide } from 'vue'
import { globalContext } from '../../utils/types'

export default defineComponent({
  name: 'cu-time-line',
  setup(_, ctx) {
    provide<string>(globalContext.timeLine, 'time-line')
    return () => {
      return h('div', { class: 'cu-time-line' }, ctx.slots.default ? ctx.slots.default() : '')
    }
  }
})
