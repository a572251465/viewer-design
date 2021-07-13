<template>
  <div class = "cu-input" :style = 'styles'>
    <span class = "cu-input__prefix" v-if = "computedPrefixIcon && isNotArea">
      <i :class = "computedPrefixIcon"></i>
    </span>
    <input ref = "inputEle"
           :type = "inputType"
           :placeholder = "placeholder"
           :class = "classes"
           :readonly = 'readonly'
           v-model = "changeValue"
           :maxlength = "maxlength"
           :style = "{...inputSpecialStyle, ...inputStyle}"
           :autocomplete = 'autocomplete'
           :name = 'name'
           :tabindex = "tabindex"
           @input = "inputChangeHandle"
           v-if = "inputType !== 'textarea'">
    <textarea ref = "inputEle"
              v-else
              :placeholder = "placeholder"
              :name = 'name'
              :rows = "rows"
              :tabindex = "tabindex"
              v-model = "changeValue"
              :style = "inputStyle"
              :class = "classes"></textarea>
    <span class = "cu-input__suffix">
      <span class = "cu-input__suffix-inner">
        <!-- 统计个数 -->
        <span class = "cu-input__count" v-if = "showWordLimit">
          <span class = "cu-input__count-inner">
            {{ countComputed }}/{{ maxlength }}
          </span>
        </span>
      </span>
      <!-- 后缀icon -->
      <i :class = "computedSuffixIcon" @click = "suffixIconHandle"
         v-if = "(computedSuffixIcon || (clearable && changeValue)) && isNotArea"></i>
    </span>
  </div>
</template>

<script lang = "ts">
import { computed, defineComponent, onMounted, PropType, ref, watch } from 'vue'
import { ISize, IType } from './types'
import { autoFocusHandle } from './input'
import { styleCommonPrefix } from '../../utils/types'
import { useModel } from '../../use/useModel'

export default defineComponent({
  name: 'cu-input',
  props: {
    type: {
      type: String as PropType<IType>,
      default: 'text'
    },
    size: {
      type: String as PropType<ISize>,
      default: 'medium'
    },
    modelValue: {
      type: [ String, Number ],
      default: ''
    },
    maxlength: {
      type: Number,
      default: 18
    },
    minlength: {
      type: Number
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    rows: {
      type: Number
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    name: String,
    readonly: {
      type: Boolean,
      default: false
    },
    max: Number,
    min: Number,
    tabindex: [ String, Number ],
    inputStyle: {
      type: Object,
      default: () => {
      }
    },
    styles: {
      type: Object,
      default: () => {
      }
    },
    width: {
      type: Number,
      default: 0
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  emits: [ 'update:modelValue', 'change' ],
  setup(props, { emit }) {
    const namespace = styleCommonPrefix.$namespace,
        inputHeight = computed<number>(() => props.type === 'textarea' ? 80 : 40),
        // 计算class
        classes = computed(() => [
          `${ namespace }-input${ styleCommonPrefix.$modifierSeparator }${ props.type }`,
          `${ namespace }-input${ styleCommonPrefix.$modifierSeparator }${ props.size }`,
          {
            [`${ styleCommonPrefix.$statePrefix }prefixIcon`]: props.prefixIcon,
            [`${ styleCommonPrefix.$statePrefix }suffixIcon`]: props.suffixIcon,
            [`${ styleCommonPrefix.$statePrefix }readonly`]: props.readonly
          }
        ]),
        // 计算style
        styles = computed(() => ({
          height: `${ inputHeight.value }px`,
          lineHeight: `${ inputHeight.value }px`,
          ...props.styles,
          width: props.width ? props.width + 'px' : 'auto'
        }))

    // 输入框
    const inputEle = ref<HTMLInputElement>(null)
    onMounted(() => {
      // 自动获取焦点
      if ( props.autofocus ) autoFocusHandle(inputEle)
    })

    // input的v-model
    const changeValue = useModel(props.modelValue, (val) => emit('update:modelValue', val)),
        countComputed = computed<number>(() => (changeValue.value + '').length || 0)
    watch(() => props.modelValue, val => changeValue.value = val)

    // 表示前后icon图标
    const suffixIcon = ref<string>(props.type === 'password' ? 'close-eye' : props.clearable ? 'close-circular' : props.suffixIcon),
        computedPrefixIcon = computed<string>(() => props.prefixIcon ? `cu-icon-${ props.prefixIcon }` : ''),
        computedSuffixIcon = computed<string>(() => suffixIcon.value ? `cu-icon-${ suffixIcon.value }` : '')

    // 表示input特殊的后缀padding
    const inputSpecialStyle = computed(() => ({
      paddingRight: suffixIcon.value && props.showWordLimit ? '50px' : suffixIcon.value ? '25px' : '44px'
    }))

    // 表示输入框的input事件
    const inputChangeHandle = () => {
      emit('change', changeValue.value)
    }

    // 表示尾部icon单击事件
    const suffixIconHandle = () => {
      // 判断是否密码框
      if ( props.type === 'password' ) {
        inputType.value = inputType.value === 'password' ? 'text' : 'password'
        suffixIcon.value = suffixIcon.value === 'close-eye' ? 'eye' : 'close-eye'
        return
      }
      if ( !props.clearable ) return
      changeValue.value = ''
      inputChangeHandle()
    }

    // 输入框的类型是否是文本域
    const isNotArea = computed<boolean>(() => props.type !== 'textarea')

    // 计算输入框的类型
    const inputType = ref<string>(props.type)

    // 监听输入框变化
    watch(changeValue, val => {
      if ( !val || props.type !== 'password' ) return
      inputType.value = 'password'
    })

    return {
      classes,
      styles,
      inputEle,
      changeValue,
      countComputed,
      computedPrefixIcon,
      computedSuffixIcon,
      inputSpecialStyle,
      inputChangeHandle,
      suffixIconHandle,
      isNotArea,
      inputType
    }
  }
})
</script>
