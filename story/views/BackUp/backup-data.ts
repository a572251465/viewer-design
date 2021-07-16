import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example: ICodeDetail[] = [
  {
    labelName: 'cu-back-up',
    fields: [
      { key: 'target', value: '.table' },
      { key: 'visibilityHeight', value: '20' }
    ]
  }
]

const componentProps: IFields[] = [
  {
    field: 'target',
    desc: '表示滚动的元素，可以是字符串，也可以是dom对象',
    defaultValue: '-',
    type: '[String, Object]'
  },
  {
    field: 'visibilityHeight',
    desc: '表示滚动到距离顶部多高会出现向上的箭头',
    defaultValue: '200',
    type: 'Number'
  },
  {
    field: 'right',
    desc: '距离右侧的距离',
    defaultValue: '40',
    type: 'Number'
  },
  {
    field: 'bottom',
    desc: '距离底部的距离',
    defaultValue: '100',
    type: 'Number'
  },
  {
    field: 'idealLeft',
    desc: '组件向上的按钮随着滚动元素而滚动的，这个只是为了特殊的业务而定制，非特殊业务下不需要触发body的滚动监听，所以我们认为当滚动元素距离视口最左边多少距离，视为不触发监听',
    defaultValue: '30',
    type: 'Number'
  },
  {
    field: 'styles',
    desc: '用来修改组件内部样式',
    defaultValue: '-',
    type: 'Object'
  },
]

const eventProps: IFields[] = [{
  field: 'complete',
  desc: '完成滚动触发的回调',
  defaultValue: '-',
  type: 'Function'
}]

export {
  example,
  componentProps,
  eventProps
}
