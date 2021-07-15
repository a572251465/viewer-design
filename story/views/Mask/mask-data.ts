import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example: ICodeDetail[] = [
  {
    labelName: 'cu-button',
    value: '点我打开'
  },
  {
    labelName: 'div',
    fields: [
      { key: 'v-show', value: 'showFlag' }
    ],
    children: [
      {
        labelName: 'cu-mask',
        fields: [
          { key: 'center', value: 'true' }
        ],
        children: [
          {
            labelName: 'cu-button',
            fields: [
              {
                key: '@click',
                value: 'showFlag = false'
              }
            ],
            value: '点我关闭'
          }
        ]
      }
    ]
  }
]

const componentProps: IFields[] = [
  {
    field: 'zIndex',
    desc: '设置遮罩层悬浮层值',
    type: 'Number',
    defaultValue: '1000'
  },
  {
    field: 'center',
    desc: '设置遮罩层中的内容是否上下居中显示',
    type: 'Boolean',
    defaultValue: 'false'
  }
]

const eventProps: IFields[] = [
  {
    field: 'closeHandle',
    desc: '点击遮罩层触发事件',
    type: 'Function',
    defaultValue: '-'
  }
]

export {
  example,
  componentProps,
  eventProps
}
