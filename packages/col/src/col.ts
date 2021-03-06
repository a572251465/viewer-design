import { computed, defineComponent, h, inject } from 'vue'
import {
  globalContext,
  IExistContext,
  IPassvalue,
  styleCommonPrefix
} from '../../utils/types'

type IInject<T> = IPassvalue<T> & IExistContext
export default defineComponent({
  name: 'cu-col',
  props: {
    span: {
      type: Number,
      default: 24,
      validator: (val: number) => val >= 1 && val <= 24
    },
    offset: {
      type: Number,
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    },
    order: {
      type: Number,
      default: 1,
      validator: (val: number) => val >= 1
    }
  },
  setup(props, { slots }) {
    // 获取来自父类传递的值
    const result = inject<IInject<number>>(globalContext.row, {
      existContext: '',
      passValue: 0
    })
    if (result.existContext !== globalContext.row) {
      console.error(
        'When using col component, the outer layer must be row component'
      )
    }

    // 单独计算实现的样式
    const namespaces = `${styleCommonPrefix.$namespace}-col`
    const classes = computed<string[]>(() => [
      namespaces,
      `${namespaces}-span-${props.span}`,
      `${namespaces}-offset-${props.offset}`
    ])
    const stylesOptions = {
      order: props.order,
      marginLeft: '',
      marginRight: ''
    }
    if (result.passValue) {
      stylesOptions.marginLeft = `${result.passValue / 2}px`
      stylesOptions.marginRight = `${result.passValue / 2}px`
    }
    const styles = computed(() => stylesOptions)

    return () =>
      h(
        props.tag,
        { class: classes.value, style: styles.value },
        slots.default?.()
      )
  }
})
