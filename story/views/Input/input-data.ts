import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example: ICodeDetail[] = [
  {
    labelName: 'cu-input',
    fields: [{ key: 'placeholder', value: '自定义提示' }]
  }
]

const example1: ICodeDetail[] = [
  {
    labelName: 'cu-input',
    fields: [
      { key: 'placeholder', value: '请输入内容' },
      { key: 'type', value: 'text' }
    ]
  },
  {
    labelName: 'cu-input',
    fields: [
      { key: 'placeholder', value: '请输入内容' },
      { key: 'type', value: 'textarea' }
    ]
  },
  {
    labelName: 'cu-input',
    fields: [
      { key: 'placeholder', value: '请输入密码' },
      { key: 'type', value: 'password' }
    ]
  }
]

const example2: ICodeDetail[] = (
  ['big', 'medium', 'small', 'mini'] as const
).map(
  (size) =>
    ({
      labelName: 'cu-input',
      fields: [
        { key: 'size', value: size },
        { key: 'placeholder', value: '请输入内容' }
      ]
    } as ICodeDetail)
)

const example3: ICodeDetail[] = [
  {
    labelName: 'cu-input',
    fields: [{ key: 'showWordLimit', value: true }]
  }
]

const example4: ICodeDetail[] = [
  {
    labelName: 'cu-input',
    fields: [{ key: 'clearable', value: true }]
  }
]

const example5: ICodeDetail[] = [
  {
    labelName: 'cu-input',
    fields: [
      { key: 'placeholder', value: '请输入账号' },
      { key: 'prefixIcon', value: 'edit' },
      { key: 'suffixIcon', value: 'search' }
    ]
  }
]

const example6: ICodeDetail[] = [
  {
    labelName: 'cu-input',
    fields: [{ key: 'autofocus', value: true }]
  }
]

const componentProps: IFields[] = [
  {
    field: 'type',
    desc: '按钮的类型，比如：普通文本，密码框等 可选值为 text, textarea, password， 如果是密码框，会默认添加icon',
    type: 'String',
    defaultValue: 'text'
  },
  {
    field: 'size',
    desc: '输入框大小，可选值为 big, medium, small, mini',
    type: 'String',
    defaultValue: 'primary'
  },
  {
    field: 'maxlength',
    desc: '输入最大值',
    type: 'Number',
    defaultValue: '18'
  },
  {
    field: 'minlength',
    desc: '输入最小值',
    type: 'Number',
    defaultValue: '-'
  },
  {
    field: 'showWordLimit',
    desc: '是否显示计算输入的字数',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'placeholder',
    desc: '原生属性，输入框的默认提示',
    type: 'String',
    defaultValue: '请输入内容'
  },
  {
    field: 'clearable',
    desc: '是否显示清除数据图标',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'prefixIcon',
    desc: '前缀图标',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'suffixIcon',
    desc: '后缀图标',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'rows',
    desc: '表示列数，注：只有type是textarea的时候才会生效',
    type: 'Number',
    defaultValue: '-'
  },
  {
    field: 'autocomplete',
    desc: '是否开启自动提示',
    type: 'String',
    defaultValue: 'off'
  },
  {
    field: 'readonly',
    desc: '是否只读',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'max',
    desc: '原生属性',
    type: 'Number',
    defaultValue: '-'
  },
  {
    field: 'min',
    desc: '原生属性',
    type: 'Number',
    defaultValue: '-'
  },
  {
    field: 'tabindex',
    desc: '原生属性',
    type: '[Number, String]',
    defaultValue: '-'
  },
  {
    field: 'inputStyle',
    desc: '可以修改input的样式',
    type: 'Object',
    defaultValue: '-'
  },
  {
    field: 'styles',
    desc: '修改外层包裹warp样式',
    type: 'Object',
    defaultValue: '-'
  },
  {
    field: 'width',
    desc: '表示输入框的宽度, 会覆盖size类型的大小',
    type: 'Number',
    defaultValue: '0'
  },
  {
    field: 'autofocus',
    desc: '是否自动获取光标',
    type: 'Boolean',
    defaultValue: 'false'
  }
]

const eventProps: IFields[] = [
  {
    field: 'change',
    desc: '相当于原生输入框的oninput事件',
    type: '-',
    defaultValue: '-'
  }
]

export {
  example,
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  componentProps,
  eventProps
}
