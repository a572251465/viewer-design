import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example1: ICodeDetail[] = [
  {
    labelName: 'cu-form',
    fields: [
      { key: 'model', value: 'userInfo' },
      { key: 'rules', value: 'rules' },
      { key: 'ref', value: 'forms' }
    ],
    children: [
      {
        labelName: 'cu-form-item',
        fields: [
          { key: 'label', value: '手机号' },
          { key: 'prop', value: 'name' },
          { key: 'labelPos', value: 'top' }
        ],
        children: [
          {
            labelName: 'cu-input',
            fields: [{ key: 'v-model', value: 'userInfo.name' }]
          }
        ]
      },
      {
        labelName: 'div',
        fields: [{ key: 'style', value: 'margin-top: 20px' }],
        children: [
          {
            labelName: 'cu-button',
            fields: [{ key: '@click', value: 'commit' }],
            value: '提交'
          },
          {
            labelName: 'cu-button',
            fields: [{ key: '@click', value: 'reset' }],
            value: '重置'
          }
        ]
      }
    ]
  }
]

const formComponentProps: IFields[] = [
  {
    field: 'model',
    defaultValue: '-',
    desc: '表示判断的属性集合, 这个是必须项',
    type: 'Object'
  },
  {
    field: 'rules',
    defaultValue: '-',
    desc: '表示判断属性的规则，分别有：required--判断是否位空 type--check的类型 message--错误消息提示 checkFun--判断执行的方法',
    type: 'Object'
  }
]

const formItemComponentProps: IFields[] = [
  {
    field: 'label',
    defaultValue: '-',
    desc: '前置文字的显示',
    type: 'string'
  },
  {
    field: 'prop',
    defaultValue: '-',
    desc: '表示需要判断的属性',
    type: 'string'
  },
  {
    field: 'width',
    defaultValue: '80',
    desc: '表示label显示的宽度',
    type: 'number'
  },
  {
    field: 'labelPos',
    defaultValue: 'left',
    desc: '表示对齐方式，分别由：left/ right/ top',
    type: 'string'
  }
]

const eventProps: IFields[] = [
  {
    field: 'check',
    defaultValue: '-',
    desc: '进行统一的check 例如：proxy.$refs["xxx"].check()',
    type: 'Function'
  },
  {
    field: 'reset',
    defaultValue: '-',
    desc: '进行统一的错误提示重置 例如：proxy.$refs["xxx"].reset()',
    type: 'Function'
  }
]

export { example1, formComponentProps, formItemComponentProps, eventProps }
