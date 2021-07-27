import { ICodeDetail } from '../../components/Code/types'

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
            fields: [
              { key: 'v-model', value: 'userInfo.name' }
            ]
          }
        ]
      },
      {
        labelName: 'div',
        fields: [
          { key: 'style', value: 'margin-top: 20px' }
        ],
        children: [
          {
            labelName: 'cu-button',
            fields: [
              { key: '@click', value: 'commit' }
            ],
            value: '提交'
          },
          {
            labelName: 'cu-button',
            fields: [
              { key: '@click', value: 'reset' }
            ],
            value: '重置'
          }
        ]
      }
    ]
  }
]

export {
  example1
}
