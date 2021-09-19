import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example: ICodeDetail[] = [
  {
    labelName: 'cu-button',
    fields: [
      {
        key: '@click',
        value: 'messageOpen("success")'
      }
    ],
    value: '打开消息提示'
  }
]

const example1: ICodeDetail[] = (
  [
    { type: 'success', label: '成功消息提示' },
    { type: 'warning', label: '警告消息提示' },
    { type: 'danger', label: '危险消息提示' },
    { type: 'info', label: '普通消息提示' }
  ] as { type: String; label: String }[]
).map(
  (item) =>
    ({
      labelName: 'cu-button',
      fields: [
        {
          key: '@click',
          value: `messageOpen("${item.type}")`
        }
      ],
      value: item.label
    } as ICodeDetail)
)

const example2: ICodeDetail[] = [
  {
    labelName: 'cu-button',
    fields: [
      {
        key: '@click',
        value: 'messageOpen1'
      }
    ],
    value: '自定义icon'
  }
]

const example3: ICodeDetail[] = [
  {
    labelName: 'cu-button',
    fields: [
      {
        key: '@click',
        value: 'messageOpen'
      }
    ],
    value: '提示文字居中'
  }
]

const example4: ICodeDetail[] = [
  {
    labelName: 'cu-button',
    fields: [
      {
        key: '@click',
        value: 'messageOpen3'
      }
    ],
    value: '显示关闭按钮'
  }
]

const example5: ICodeDetail[] = [
  {
    labelName: 'cu-button',
    fields: [
      {
        key: '@click',
        value: 'messageOpen4'
      }
    ],
    value: '设置10s关闭'
  }
]

const componentProps: IFields[] = [
  {
    field: 'options',
    desc: '调用方法是this.$Message.success(message || options), 如果传递字符串，下面的参数忽略，内部会自己合并，但是字符串必须输入。如果是对象，message属性必须有值',
    type: '["String", "Object"]',
    defaultValue: '-'
  },
  {
    field: 'message',
    desc: '用来表示提示的消息，是必须输入的',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'type',
    desc: '消息类型，可选值为 success, warning, danger, info',
    type: 'String',
    defaultValue: 'success'
  },
  {
    field: 'iconClass',
    desc: '设置自定义的icon，覆盖默认的图标。 但是必须是Icon组件中的',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'isSupportHtml',
    desc: '可以传递html，最后转换为html。但是不建议',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'showClose',
    desc: '显示关闭消息的按钮',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'center',
    desc: '设置文字图标等居中',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'onClose',
    desc: '当消息的关闭的时候触发的事件，可以按照用户的需求，自行定义执行方法',
    type: 'Function',
    defaultValue: 'Function.prototype'
  },
  {
    field: 'offset',
    desc: '设置消息从上而下动画的偏移量，注：一般不建议设置',
    type: 'Number',
    defaultValue: '20'
  },
  {
    field: 'delay',
    desc: '延长消息关闭的时间',
    type: 'Number',
    defaultValue: '2000'
  }
]

export {
  example,
  example1,
  example2,
  example3,
  example4,
  example5,
  componentProps
}
