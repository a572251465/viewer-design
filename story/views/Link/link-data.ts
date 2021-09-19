import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example: ICodeDetail[] = [
  {
    labelName: 'cu-link',
    fields: [{ key: 'type', value: 'primary' }],
    value: '有状态的'
  },
  {
    labelName: 'cu-link',
    fields: [{ key: 'underline', value: 'true' }],
    value: '有下划线的'
  },
  {
    labelName: 'cu-link',
    fields: [{ key: 'disabled', value: 'true' }],
    value: '禁用状态的'
  },
  {
    labelName: 'cu-link',
    fields: [{ key: 'icon', value: 'edit' }],
    value: '带有icon的'
  }
]

const example1: ICodeDetail[] = (
  ['primary', 'success', 'info', 'danger', 'warning'] as const
).map(
  (type) =>
    ({
      labelName: 'cu-link',
      fields: [{ key: 'type', value: type }],
      value: type
    } as ICodeDetail)
)

const example2: ICodeDetail[] = (['edit', 'left', 'right'] as const).map(
  (icon) =>
    ({
      labelName: 'cu-link',
      fields: [{ key: 'icon', value: icon }],
      value: icon
    } as ICodeDetail)
)

const componentProps: IFields[] = [
  {
    field: 'type',
    desc: '链接类型，用来表示链接不同的状态，可选值有 primary, success, info, danger, warning',
    type: 'String',
    defaultValue: 'info'
  },
  {
    field: 'underline',
    desc: '链接下划线，表示链接是否具有下滑线，可选值有 true, false',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'disabled',
    desc: '禁用状态，用来表示链接禁用不可点击，可选值有 true, false',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'href',
    desc: '链接地址，表示链接地址，为空的情况下是javascript:void(0);',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'icon',
    desc: '链接图标，表示链接不同的图标，只有Icon组件中声明的图标可用',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'target',
    desc: 'a标签原生属性',
    type: 'String',
    defaultValue: '_self'
  }
]

const eventProps: IFields[] = [
  {
    field: 'on-click',
    desc: '点击链接emit的事件',
    type: '-',
    defaultValue: '-'
  }
]

export { example, example1, example2, componentProps, eventProps }
