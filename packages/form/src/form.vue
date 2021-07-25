<template>
  <div class = "cu-form">
    <slot></slot>
  </div>
</template>

<script lang = "ts">
import { ComponentPublicInstance, defineComponent, onBeforeMount, onBeforeUnmount, PropType, provide } from 'vue'
import useOnEmit from '../../use/useOnEmit'
import { FORM_INJECT_OBJ, ON_EMIT_KEY } from '../../utils/define'

const instanceArr: ComponentPublicInstance[] = []
const subscribeFun = (instance: ComponentPublicInstance) => {
  if ( instanceArr.includes(instance) ) return false
  instanceArr.push(instance)
}

export default defineComponent({
  name: 'cu-form',
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object as PropType<{
        [keyName: string]: {
          required?: boolean,
          message: string,
          checkFun?: Function
        }
      }>,
      required: true
    }
  },
  setup(props) {

    provide(FORM_INJECT_OBJ, {
      model: props.model,
      rules: props.rules
    } as {
      model: object,
      rules: object
    })

    onBeforeMount(() => {
      instanceArr.length = 0
      useOnEmit.on(ON_EMIT_KEY, subscribeFun)
    })

    onBeforeUnmount(() => {
      useOnEmit.off(ON_EMIT_KEY, subscribeFun)
      instanceArr.length = 0
    })
  }
})
</script>
