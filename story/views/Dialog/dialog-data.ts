import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example: ICodeDetail[] = [
  {
    labelName: 'cu-dialog',
    fields: [{ key: 'v-model', value: 'showFlag' }],
    children: [
      {
        labelName: 'label',
        value: 'account:'
      },
      {
        labelName: 'cu-input',
        fields: [{ key: 'placeholder', value: '请输入账号' }]
      }
    ],
    value: '这就是简单的使用'
  }
]

const example1: ICodeDetail[] = [
  {
    labelName: 'cu-dialog',
    fields: [
      { key: 'v-model', value: 'showFlag1' },
      { key: 'title', value: '表单弹出框' },
      { key: 'width', value: '80%' }
    ],
    children: [
      {
        labelName: 'h3',
        value: '设置了自定义标题 以及自定义宽度'
      }
    ]
  }
]

const example2: ICodeDetail[] = [
  {
    labelName: 'cu-dialog',
    fields: [
      { key: 'v-model', value: 'showFlag2' },
      { key: 'top', value: '20px' }
    ],
    children: [
      {
        labelName: 'h3',
        value: '距离顶部的位置'
      }
    ]
  }
]

const example3: ICodeDetail[] = [
  {
    labelName: 'cu-dialog',
    fields: [
      { key: 'v-model', value: 'showFlag3' },
      { key: 'closeOnPressEscape', value: true },
      { key: 'closeOnClickModel', value: true }
    ],
    children: [
      {
        labelName: 'h3',
        value: '可以点击遮罩层 或是 按键{esc}进行关闭'
      }
    ]
  }
]

const example4: ICodeDetail[] = [
  {
    labelName: 'cu-dialog',
    fields: [
      { key: 'v-model', value: 'showFlag4' },
      { key: 'closeOnPressEscape', value: true },
      { key: 'closeOnClickModel', value: true },
      { key: 'visibleHeader', value: false },
      { key: 'visibleFooter', value: false }
    ],
    children: [
      {
        labelName: 'h3',
        value: '可以隐藏头部以及footer部分样式，使用自定义的'
      }
    ]
  }
]

const example5: ICodeDetail[] = [
  {
    labelName: 'cu-dialog',
    fields: [
      { key: 'v-model', value: 'showFlag5' },
      { key: 'openDelay', value: '2000' },
      { key: 'closeDelay', value: '5000' }
    ],
    children: [
      {
        labelName: 'h3',
        value: '为了满足客户定制化需求，弹框定制了延迟打开弹框以及延迟关闭弹框'
      },
      {
        labelName: 'h3',
        value: '打开延迟2s 关闭延迟5s'
      }
    ]
  }
]

const example6: ICodeDetail[] = [
  {
    labelName: 'cu-dialog',
    fields: [
      { key: 'v-model', value: 'showFlag6' },
      { key: 'center', value: true }
    ],
    children: [
      {
        labelName: 'h3',
        value: '弹框居中显示'
      }
    ]
  }
]

const example7: ICodeDetail[] = [
  ...[{ labelName: 'p', value: '确定提示框' } as ICodeDetail],
  ...['info', 'success', 'warning', 'danger'].map(
    (type) =>
      ({
        labelName: 'cu-alert',
        fields: [{ key: 'type', value: type }],
        children: [
          {
            labelName: 'cu-link',
            fields: [{ key: '@click', value: `openDialog("${type}")` }],
            value: `${type} --确认框`
          }
        ]
      } as ICodeDetail)
  ),
  ...[{ labelName: 'p', value: '确认提示框' } as ICodeDetail],
  {
    labelName: 'cu-alert',
    fields: [{ key: 'type', value: 'confirm' }],
    children: [
      {
        labelName: 'cu-link',
        fields: [{ key: '@click', value: 'openDialog("confirm")' }],
        value: `confirm --确认框`
      }
    ]
  }
]

const componentProps: IFields[] = [
  {
    field: 'v-model',
    desc: '双向数据绑定数据',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'title',
    desc: '表示弹框的标题',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'width',
    desc: '设置弹框的宽度',
    type: '[String, Number]',
    defaultValue: '50%'
  },
  {
    field: 'height',
    desc: '设置弹框显示的高度',
    type: '[String, Number]',
    defaultValue: 'auto'
  },
  {
    field: 'top',
    desc: '弹框距离顶部的距离',
    type: 'String',
    defaultValue: '15vh'
  },
  {
    field: 'type',
    desc: '**表示通过指令调用弹框的类型 可选值有：info, success, warning, danger, confirm 只能是通过指令调用的时候使用',
    type: 'String',
    defaultValue: 'info'
  },
  {
    field: 'closeOnClickModel',
    desc: '点击遮罩层是是否关闭弹框',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'lockScroll',
    desc: '是否锁定滚动条',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'openDelay',
    desc: '弹框打开延迟时间',
    type: 'Number',
    defaultValue: '0'
  },
  {
    field: 'closeDelay',
    desc: '弹框关闭延迟',
    type: 'Number',
    defaultValue: '0'
  },
  {
    field: 'beforeClose',
    desc: '弹框关闭的回调 可以通过Promise reject 来阻止关闭',
    type: 'Function',
    defaultValue: 'Promise.resolve(Function.prototype)'
  },
  {
    field: 'center',
    desc: '设置弹框居中显示',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'visibleHeader',
    desc: '弹框显示Header部分',
    type: 'Boolean',
    defaultValue: 'true'
  },
  {
    field: 'visibleFooter',
    desc: '弹框显示Footer部分',
    type: 'Boolean',
    defaultValue: 'true'
  },
  {
    field: 'styles',
    desc: '添加样式，覆盖原生的样式',
    type: 'Object',
    defaultValue: '-'
  },
  {
    field: 'closeOnPressEscape',
    desc: '按键{esc}是否关闭弹框，但是属性{closeOnClickModel}必须是true',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'message',
    desc: '**表示指令消息的内容',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'ok',
    desc: '**指令弹框中类型是confirm的时候，点击确定的回调',
    type: 'Function',
    defaultValue: 'Function.prototype'
  },
  {
    field: 'cancel',
    desc: '**指令弹框中类型是confirm的时候，点击取消的回调',
    type: 'Function',
    defaultValue: 'Function.prototype'
  }
]

const eventProps: IFields[] = [
  {
    field: 'sure-event',
    desc: '非指令性弹框，点击确定的回调',
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
  example7,
  componentProps,
  eventProps
}
