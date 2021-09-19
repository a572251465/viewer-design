import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example: ICodeDetail[] = [
  {
    labelName: 'cu-alert',
    fields: [{ key: 'title', value: '标题提示' }],
    value: '默认的文案'
  }
]

const example1: ICodeDetail[] = (
  [
    { text: '默认提示的文案', type: 'info' },
    { text: '活性提示的文案', type: 'primary' },
    { text: '警告提示的文案', type: 'warning' },
    { text: '危险提示的文案', type: 'danger' },
    { text: '成功提示的文案', type: 'success' }
  ] as { text: string; type: string }[]
).map(
  (item) =>
    ({
      labelName: 'cu-alert',
      fields: [{ key: 'type', value: item.type }],
      value: item.text
    } as ICodeDetail)
)

const example2: ICodeDetail[] = [
  {
    labelName: 'cu-alert',
    fields: [
      {
        key: 'closable',
        value: true
      }
    ],
    value: '可关闭的文案'
  }
]

const example3: ICodeDetail[] = [
  {
    labelName: 'cu-alert',
    fields: [
      {
        key: 'center',
        value: true
      }
    ],
    value: '提示文字居中'
  }
]

const example4: ICodeDetail[] = [
  {
    labelName: 'cu-alert',
    fields: [
      {
        key: 'closeText',
        value: '我知道了'
      },
      {
        key: 'closable',
        value: true
      }
    ],
    value: '自定义关闭文字'
  }
]

const example5: ICodeDetail[] = [
  {
    labelName: 'cu-alert',
    fields: [
      {
        key: 'showIcon',
        value: true
      }
    ],
    value: '显示提示文案图标'
  }
]

const componentProps: IFields[] = [
  {
    field: 'title',
    desc: '表示文案的标题',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'type',
    desc: '提示文案的类型，可选值为 info, primary, warning, danger, success',
    type: 'String',
    defaultValue: 'info'
  },
  {
    field: 'closable',
    desc: '用来显示关闭图标',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'center',
    desc: '表示提示文案是否居中',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'closeText',
    desc: '自定义关闭文案，如果想要生效，属性closeable 必须是true',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'showIcon',
    desc: '是否显示前置图标',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'styles',
    desc: '用来修改组件Alert样式',
    type: 'Object',
    defaultValue: '-'
  }
]

const eventProps: IFields[] = [
  {
    field: 'close',
    desc: '点击关闭按钮触发的事件',
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
  componentProps,
  eventProps
}
