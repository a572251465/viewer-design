<template>
  <div class="cu-form-item" :class="classes">
    <label
      class="cu-form-item-left"
      :style="styles"
      :for="label"
      v-if="label"
      >{{ label }}</label
    >
    <div class="cu-form-item-right" :class="[errorStatus ? 'is-error' : '']">
      <div>
        <slot></slot>
        <label class="error" v-show="errorMsg">{{ errorMsg }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  PropType,
  ref
} from 'vue'
import useOnEmit from '../../use/useOnEmit'
import { FORM_INJECT_OBJ, ON_EMIT_KEY } from '../../utils/define'
import {
  isEmail,
  isHttp,
  isNotEmpty,
  isNumber,
  isPhone
} from '../../utils/tool'
import { styleCommonPrefix } from '../../utils/types'

const typeCompareFun = {
  number: isNumber,
  phone: isPhone,
  email: isEmail,
  http: isHttp
}

const labelPosMapping: { [keyName: string]: string } = {
  left: 'flex-start',
  top: 'flex-start',
  right: 'flex-end'
}

const mergeCheck = (rules) => {
  if (!rules || (Array.isArray(rules) && rules.length === 0)) return rules

  return rules.map(({ required, type, message, checkFun }) => {
    if (required) {
      return {
        message,
        checkFun: checkFun || isNotEmpty
      }
    }
    const defaultFun = () => true
    return {
      message,
      checkFun: checkFun || typeCompareFun[type] || defaultFun
    }
  })
}

export default defineComponent({
  name: 'cu-form-item',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: 80
    },
    labelPos: {
      type: String as PropType<'top' | 'left' | 'right'>,
      default: 'left'
    }
  },
  setup(props) {
    const { $statePrefix } = styleCommonPrefix
    const classes = computed<string[]>(() => [
      `${$statePrefix}${props.labelPos}`
    ])
    const styles = computed(() => ({
      width: typeof props.width === 'string' ? props.width : `${props.width}px`,
      justifyContent: labelPosMapping[props.labelPos],
      paddingRight: props.labelPos === 'right' ? '15px' : '0px'
    }))

    const { model, rules } =
      inject<{ model: object; rules: object }>(FORM_INJECT_OBJ)

    const errorMsg = ref<string>('')
    const errorStatus = ref<boolean>(false)
    onMounted(() => {
      const { proxy } = getCurrentInstance()
      useOnEmit.emit(ON_EMIT_KEY, proxy)
    })

    const validate = (): boolean => {
      const value = model[props.prop]
      const singleRules = mergeCheck(rules[props.prop])
      if (
        !singleRules ||
        (Array.isArray(singleRules) && singleRules.length === 0)
      )
        return true

      let i = 0
      for (; i < singleRules.length; i += 1) {
        const itemObj = singleRules[i]
        if (!itemObj.checkFun(value)) {
          errorMsg.value = itemObj.message
          errorStatus.value = true
          return false
        }
      }
      return true
    }

    const reset = () => {
      errorMsg.value = ''
      errorStatus.value = false
    }

    return {
      errorMsg,
      validate,
      reset,
      classes,
      styles,
      errorStatus
    }
  }
})
</script>
