import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example: ICodeDetail[] = [
  {
    labelName: 'cu-button',
    fields: [
      {key: '@click', value: 'showFlag = true'}
    ],
    value: '打开抽屉弹框'
  },
  {
    labelName: 'cu-drawer',
    fields: [
      {key: 'v-model', value: 'showFlag'}
    ],
    children: [
      {
        labelName: 'span',
        value: 'account：'
      },
      {
        labelName: 'cu-input',
        fields: [
          {key: 'placeholder', value: '请输入账号'}
        ]
      }
    ]
  }
]

const example1: ICodeDetail[] = [
  ...(['bottom', 'top', 'right', 'left'] as const).map(item => {
    return {
      labelName: 'cu-button',
      value: item
    } as ICodeDetail
  }),
  {
    labelName: 'cu-drawer',
    fields: [
      {
        key: 'v-model', value: 'showFlag1'
      },
      {
        key: 'direction', value: 'position'
      }
    ],
    children: [
      {
        labelName: 'h4',
        value: '不同方向的弹框'
      }
    ]
  }
]

const example2: ICodeDetail[] = [
  {
    labelName: 'cu-button',
    fields: [
      {key: '@click', value: 'showFlag2 = true'}
    ],
    value: '多种方式关闭'
  },
  {
    labelName: 'cu-drawer',
    fields: [
      {key: 'v-model', value: 'showFlag2'},
      {key: 'clickMaskClose', value: 'true'},
      {key: 'closeOnPressEscape', value: 'true'}
    ],
    children: [
      {
        labelName: 'span',
        value: 'account：'
      },
      {
        labelName: 'cu-input',
        fields: [
          {key: 'placeholder', value: '请输入账号'}
        ]
      }
    ]
  }
]

const example3: ICodeDetail[] = [
  {
    labelName: 'cu-button',
    fields: [
      {key: '@click', value: 'showFlag3 = true'}
    ],
    value: '设置大小'
  },
  {
    labelName: 'cu-drawer',
    fields: [
      {key: 'v-model', value: 'showFlag3'},
      {key: 'size', value: '50%'}
    ],
    children: [
      {
        labelName: 'span',
        value: 'account：'
      },
      {
        labelName: 'cu-input',
        fields: [
          {key: 'placeholder', value: '请输入账号'}
        ]
      }
    ]
  }
]

const componentProps: IFields[] = [
  {
    field: 'v-model',
    desc: '用来控制弹框显隐',
    type: 'Boolean',
    defaultValue: '-'
  },
  {
    field: 'beforeClose',
    desc: '关闭回调事件，可以通过Promise reject来拒绝关闭',
    type: 'Function',
    defaultValue: 'Function.prototype'
  },
  {
    field: 'closeOnPressEscape',
    desc: '点击{esc}键来关闭弹框，但是属性{clickMaskClose}必须设置为true',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'direction',
    desc: '表示弹框打开的方法，可选值为：bottom, top, right, left',
    type: 'String',
    defaultValue: 'right'
  },
  {
    field: 'showClose',
    desc: '是否显示关闭按钮',
    type: 'Boolean',
    defaultValue: 'true'
  },
  {
    field: 'clickMaskClose',
    desc: '点击遮罩层是否关闭弹框',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'size',
    desc: '修改弹框的大小，如果属性{direction}是bottom，top的话，表示高度，反之就是表示宽度',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'zIndex',
    desc: '表示悬浮层值',
    type: 'Number',
    defaultValue: '-'
  },
  {
    field: 'title',
    desc: '表示显示的标题',
    type: 'String',
    defaultValue: '-'
  },
]

const eventProps: IFields[] = [
  {
    field: 'open',
    desc: '弹框打开时的回调函数',
    type: '-',
    defaultValue: '-'
  },
  {
    field: 'opened',
    desc: '弹框打开后的回调函数',
    type: '-',
    defaultValue: '-'
  },
  {
    field: 'close',
    desc: '弹框关闭时的回调函数',
    type: '-',
    defaultValue: '-'
  },
  {
    field: 'closed',
    desc: '弹框关闭后的回调函数',
    type: '-',
    defaultValue: '-'
  }
]

export {
  example,
  example1,
  example2,
  example3,
  componentProps,
  eventProps
}
