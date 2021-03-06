import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example: ICodeDetail[] = [
  {
    labelName: 'cu-layout',
    children: [
      {
        labelName: 'cu-row',
        children: [1, 2].map(
          (item) =>
            ({
              labelName: 'cu-col',
              fields: [{ key: 'span', value: '3' }],
              value: `${item}`
            } as ICodeDetail)
        )
      },
      {
        labelName: 'cu-row',
        fields: [{ key: 'justify', value: 'center' }],
        children: [1, 2].map(
          (item) =>
            ({
              labelName: 'cu-col',
              fields: [{ key: 'span', value: '3' }],
              value: `${item}`
            } as ICodeDetail)
        )
      },
      {
        labelName: 'cu-row',
        children: [1, 2].map(
          (item) =>
            ({
              labelName: 'cu-col',
              fields: [
                { key: 'span', value: '2' },
                { key: 'offset', value: '2' }
              ],
              value: `${item}`
            } as ICodeDetail)
        )
      }
    ]
  }
]

const start = 4
const example1: ICodeDetail[] = [
  {
    labelName: 'cu-layout',
    children: [
      {
        labelName: 'cu-row',
        children: [3, 4, 5].map(
          (item, key) =>
            ({
              labelName: 'cu-col',
              fields: [
                { key: 'span', value: '2' },
                { key: 'offset', value: '2' },
                { key: 'order', value: `${start - key}` }
              ],
              value: `${item}`
            } as ICodeDetail)
        )
      }
    ]
  }
]

const example2: ICodeDetail[] = [
  {
    labelName: 'cu-layout',
    children: [
      {
        labelName: 'cu-row',
        fields: [{ key: 'gutter', value: '20' }],
        children: [5, 6].map(
          (item) =>
            ({
              labelName: 'cu-col',
              fields: [{ key: 'span', value: '3' }],
              value: `${item}`
            } as ICodeDetail)
        )
      }
    ]
  }
]

const example3: ICodeDetail[] = [
  {
    labelName: 'cu-layout',
    children: [
      {
        labelName: 'cu-row',
        fields: [
          { key: 'direction', value: 'column' },
          { key: 'justify', value: 'center' },
          { key: 'align', value: 'middle' },
          { key: 'style', value: 'height: 300px;' }
        ],
        children: [7, 8, 9, 10].map(
          (item) =>
            ({
              labelName: 'cu-col',
              fields: [{ key: 'span', value: '3' }],
              value: `${item}`
            } as ICodeDetail)
        )
      }
    ]
  }
]

const layoutComponent: IFields[] = [
  {
    field: 'tag',
    desc: '?????????????????????',
    defaultValue: 'div',
    type: 'String'
  }
]

const rowComponent: IFields[] = [
  {
    field: 'gutter',
    desc: '???????????????????????????',
    defaultValue: '0',
    type: 'Number'
  },
  {
    field: 'direction',
    desc: '???????????????????????????????????????row, column, row-reverse, column-reverse',
    defaultValue: 'row',
    type: 'String'
  },
  {
    field: 'justify',
    desc: '??????????????????????????????, ???????????????start, cen, center, space-around, space-between',
    defaultValue: 'start',
    type: 'String'
  },
  {
    field: 'tag',
    desc: '?????????????????????',
    defaultValue: 'div',
    type: 'String'
  }
]

const colComponent: IFields[] = [
  {
    field: 'span',
    desc: '?????????????????????, ????????????24??????????????????????????????1????????????row??? ????????????24???col',
    defaultValue: '24',
    type: 'Number'
  },
  {
    field: 'offset',
    desc: '???????????????????????????',
    defaultValue: '0',
    type: 'Number'
  },
  {
    field: 'tag',
    desc: '?????????????????????',
    defaultValue: 'div',
    type: 'String'
  },
  {
    field: 'order',
    desc: '????????????????????????????????????????????????',
    defaultValue: '1',
    type: 'Number'
  }
]

export {
  example,
  example1,
  example2,
  example3,
  layoutComponent,
  rowComponent,
  colComponent
}
