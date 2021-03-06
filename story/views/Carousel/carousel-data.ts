import { ICodeDetail } from '../../components/Code/types'
import { IFields } from '../../components/TableProps/types'

const example: ICodeDetail[] = [
  {
    labelName: 'div',
    fields: [
      {
        key: 'class',
        value: 'container'
      }
    ],
    children: [
      {
        labelName: 'cu-carousel',
        children: (['red', 'yellow', 'green', 'blue'] as const).map(
          (key) =>
            ({
              labelName: 'cu-carousel-item',
              fields: [
                {
                  key: 'v-for',
                  value: '(item, key) in colors'
                },
                {
                  key: 'key',
                  value: 'item'
                }
              ],
              children: [
                {
                  labelName: 'div',
                  fields: [
                    {
                      key: ':style',
                      value: `{background: item, width: '100%', height: '100%'}`
                    },
                    {
                      key: 'class',
                      value: 'justify-align-center'
                    }
                  ],
                  value: key + 1
                }
              ]
            } as ICodeDetail)
        )
      }
    ]
  }
]

const example1: ICodeDetail[] = [
  {
    labelName: 'div',
    fields: [
      {
        key: 'class',
        value: 'container'
      }
    ],
    children: [
      {
        labelName: 'cu-carousel',
        fields: [{ key: 'direction', value: 'vertical' }],
        children: (['red', 'yellow', 'green', 'blue'] as const).map(
          (key) =>
            ({
              labelName: 'cu-carousel-item',
              fields: [
                {
                  key: 'v-for',
                  value: '(item, key) in colors'
                },
                {
                  key: 'key',
                  value: 'item'
                }
              ],
              children: [
                {
                  labelName: 'div',
                  fields: [
                    {
                      key: ':style',
                      value: `{background: item, width: '100%', height: '100%'}`
                    },
                    {
                      key: 'class',
                      value: 'justify-align-center'
                    }
                  ],
                  value: key + 1
                }
              ]
            } as ICodeDetail)
        )
      }
    ]
  }
]

const example2: ICodeDetail[] = [
  {
    labelName: 'div',
    fields: [
      {
        key: 'class',
        value: 'container'
      }
    ],
    children: [
      {
        labelName: 'cu-carousel',
        fields: [{ key: 'autoplay', value: 'false' }],
        children: (['red', 'yellow', 'green', 'blue'] as const).map(
          (key) =>
            ({
              labelName: 'cu-carousel-item',
              fields: [
                {
                  key: 'v-for',
                  value: '(item, key) in colors'
                },
                {
                  key: 'key',
                  value: 'item'
                }
              ],
              children: [
                {
                  labelName: 'div',
                  fields: [
                    {
                      key: ':style',
                      value: `{background: item, width: '100%', height: '100%'}`
                    },
                    {
                      key: 'class',
                      value: 'justify-align-center'
                    }
                  ],
                  value: key + 1
                }
              ]
            } as ICodeDetail)
        )
      }
    ]
  }
]

const example3: ICodeDetail[] = [
  {
    labelName: 'div',
    fields: [
      {
        key: 'class',
        value: 'container'
      }
    ],
    children: [
      {
        labelName: 'cu-carousel',
        fields: [{ key: 'indicatorPosition', value: 'outside' }],
        children: (['red', 'yellow', 'green', 'blue'] as const).map(
          (key) =>
            ({
              labelName: 'cu-carousel-item',
              fields: [
                {
                  key: 'v-for',
                  value: '(item, key) in colors'
                },
                {
                  key: 'key',
                  value: 'item'
                }
              ],
              children: [
                {
                  labelName: 'div',
                  fields: [
                    {
                      key: ':style',
                      value: `{background: item, width: '100%', height: '100%'}`
                    },
                    {
                      key: 'class',
                      value: 'justify-align-center'
                    }
                  ],
                  value: key + 1
                }
              ]
            } as ICodeDetail)
        )
      }
    ]
  }
]

const componentProps: IFields[] = [
  {
    field: 'height',
    desc: '??????????????????????????????',
    type: 'String',
    defaultValue: '200px'
  },
  {
    field: 'initialIndex',
    desc: '???????????????????????????????????????????????????????????????????????????',
    type: 'Number',
    defaultValue: '0'
  },
  {
    field: 'direction',
    desc: '??????????????????????????????,???????????????horizontal vertical',
    type: 'String',
    defaultValue: 'horizontal'
  },
  {
    field: 'autoplay',
    desc: '????????????????????????',
    type: 'Boolean',
    defaultValue: 'true'
  },
  {
    field: 'interval',
    desc: '????????????????????????????????????',
    type: 'Number',
    defaultValue: '2000'
  },
  {
    field: 'pauseOnHover',
    desc: '???????????????????????????????????????????????????????????????',
    type: 'Boolean',
    defaultValue: 'true'
  },
  {
    field: 'indicatorPosition',
    desc: '??????????????????????????? ?????????????????????????????? ?????????outside none, ??????????????????{direction}???????????????????????????',
    type: 'String',
    defaultValue: 'none'
  },
  {
    field: 'loop',
    desc: '????????????????????????',
    type: 'Boolean',
    defaultValue: 'true'
  }
]

export { example, example1, example2, example3, componentProps }
