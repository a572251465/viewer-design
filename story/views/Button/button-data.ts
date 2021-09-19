import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example: ICodeDetail[] = [
  {
    labelName: 'cu-button',
    fields: [{ key: 'size', value: 'big' }],
    value: '大的'
  },
  {
    labelName: 'cu-button',
    fields: [{ key: 'type', value: 'success' }],
    value: '成功的'
  },
  {
    labelName: 'cu-button',
    fields: [{ key: 'round', value: 'true' }],
    value: '圆角的'
  },
  {
    labelName: 'cu-button',
    fields: [{ key: 'icon', value: 'edit' }],
    value: '编辑'
  },
  {
    labelName: 'cu-button',
    fields: [{ key: 'disabled', value: 'true' }],
    value: '禁用的'
  },
  {
    labelName: 'cu-button',
    fields: [{ key: 'loading', value: 'true' }],
    value: '加载中'
  }
]

const example1: ICodeDetail[] = (
  ['medium', 'small', 'mini', 'big'] as const
).map(
  (size) =>
    ({
      labelName: 'cu-button',
      fields: [{ key: 'size', value: size }],
      value: size
    } as ICodeDetail)
)

const example2: ICodeDetail[] = (
  ['primary', 'success', 'warning', 'danger', 'info', 'text'] as const
).map(
  (type) =>
    ({
      labelName: 'cu-button',
      fields: [{ key: 'type', value: type }],
      value: type
    } as ICodeDetail)
)

const example3: ICodeDetail = {
  labelName: 'cu-button',
  fields: [{ key: 'round', value: 'true' }],
  value: '圆角按钮'
}

const example4: ICodeDetail = {
  labelName: 'cu-button',
  fields: [{ key: 'disabled', value: 'true' }],
  value: '禁用按钮'
}

const example5: ICodeDetail = {
  labelName: 'cu-button',
  fields: [{ key: 'loading', value: 'true' }],
  value: '加载中按钮'
}

const example6: ICodeDetail[] = (
  ['edit', 'search', 'close', 'date'] as const
).map(
  (icon) =>
    ({
      labelName: 'cu-button',
      fields: [{ key: 'icon', value: icon }],
      value: icon
    } as ICodeDetail)
)

const componentProps: IFields[] = [
  {
    field: 'size',
    desc: '按钮大小，可选值为 medium, small, mini, big， 或是不设置',
    type: 'String',
    defaultValue: 'medium'
  },
  {
    field: 'type',
    desc: '按钮类型，可选值为 primary, success, warning, danger, info, text， 一般用来设置按钮的状态',
    type: 'String',
    defaultValue: 'primary'
  },
  {
    field: 'round',
    desc: '按钮圆角，可选值为true, false',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'styles',
    desc: '用来自定义样式，覆盖原生的样式',
    type: 'Object',
    defaultValue: '-'
  },
  {
    field: 'circle',
    desc: '按钮圆圈，可选值为true, false',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'icon',
    desc: '给按钮添加icon图标，只能是Icon组件中展示的icon',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'disabled',
    desc: '设置按钮的非活性，禁止按钮的点击事件',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'loading',
    desc: '表示加载中的按钮状态, 如果跟icon同时存在，优先级高',
    type: 'Boolean',
    defaultValue: 'false'
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
  componentProps
}
