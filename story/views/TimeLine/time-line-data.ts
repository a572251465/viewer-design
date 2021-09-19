import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example: ICodeDetail[] = [
  {
    labelName: 'cu-time-line',
    children: Array.from({ length: 5 }, () => 0).map(
      (item, key) =>
        ({
          labelName: 'cu-time-line-item',
          fields: [
            { key: 'placement', value: 'bottom' },
            { key: 'timestamp', value: '2018-04-03' }
          ],
          value: `活动倒计时${key}`
        } as ICodeDetail)
    )
  }
]

const example1: ICodeDetail[] = [
  {
    labelName: 'cu-time-line',
    children: ['primary', 'success', 'warning', 'danger', 'info'].map(
      (item) =>
        ({
          labelName: 'cu-time-line-item',
          fields: [
            { key: 'placement', value: 'top' },
            { key: 'timestamp', value: '2018-04-03' },
            { key: 'type', value: item }
          ],
          value: `状态：${item}`
        } as ICodeDetail)
    )
  }
]

const example2: ICodeDetail[] = [
  {
    labelName: 'cu-time-line',
    children: ['primary', 'success', 'warning', 'danger', 'info'].map(
      (item) =>
        ({
          labelName: 'cu-time-line-item',
          fields: [
            { key: 'placement', value: 'top' },
            { key: 'timestamp', value: '2018-04-03' },
            { key: 'type', value: item },
            { key: 'size', value: 'big' }
          ],
          value: `状态：${item}`
        } as ICodeDetail)
    )
  }
]

const example3: ICodeDetail[] = [
  {
    labelName: 'cu-time-line',
    children: Array.from({ length: 5 }, () => 0).map(
      (item, key) =>
        ({
          labelName: 'cu-time-line-item',
          fields: [
            { key: 'placement', value: 'bottom' },
            { key: 'timestamp', value: '2018-04-03' },
            { key: 'icon', value: 'example' }
          ],
          value: `活动倒计时${key}`
        } as ICodeDetail)
    )
  }
]

const timeLineComponent: IFields[] = [
  {
    field: 'slot',
    desc: '设置的插槽',
    type: '-',
    defaultValue: '-'
  }
]

const timeLineItemComponent: IFields[] = [
  {
    field: 'timestamp',
    desc: '设置的显示的时间',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'hideTimestamp',
    desc: '是否隐藏显示的时间',
    type: 'Boolean',
    defaultValue: 'false'
  },
  {
    field: 'placement',
    desc: '设置时间显示的方向，可选值有：top, bottom',
    type: 'String',
    defaultValue: 'bottom'
  },
  {
    field: 'type',
    desc: '节点类型，可选值有：primary, success, warning, danger, info',
    type: 'String',
    defaultValue: 'info'
  },
  {
    field: 'color',
    desc: '节点颜色，比type的优先级高，必须是合法的色值',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'size',
    desc: '节点尺寸, 可选值有：medium, big',
    type: 'String',
    defaultValue: 'medium'
  },
  {
    field: 'icon',
    desc: '节点内显示的图标, 必须是支持的图片',
    type: 'String',
    defaultValue: '-'
  },
  {
    field: 'styles',
    desc: '可以自由扩展外层的样式',
    type: 'Object',
    defaultValue: '-'
  }
]

export {
  example,
  example1,
  example2,
  example3,
  timeLineItemComponent,
  timeLineComponent
}
