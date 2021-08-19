import { ICodeDetail } from "../../components/Code/types";
import { IFields } from "../../components/TableProps/types";

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
        children: (['red', 'yellow', 'green', 'blue'] as const).map((key, _) => {
          return {
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
          } as ICodeDetail
        })
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
        fields: [
          {key: 'direction', value: 'vertical'}
        ],
        children: (['red', 'yellow', 'green', 'blue'] as const).map((key, _) => {
          return {
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
          } as ICodeDetail
        })
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
        fields: [
          {key: 'autoplay', value: 'false'}
        ],
        children: (['red', 'yellow', 'green', 'blue'] as const).map((key, _) => {
          return {
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
          } as ICodeDetail
        })
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
        fields: [
          {key: 'indicatorPosition', value: 'outside'}
        ],
        children: (['red', 'yellow', 'green', 'blue'] as const).map((key, _) => {
          return {
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
          } as ICodeDetail
        })
      }
    ]
  }
]

const componentProps: IFields[] = [
  {
    field: 'height',
    desc: '设置走马灯容器的高度',
    type: 'String',
    defaultValue: '200px'
  },
  {
    field: 'initialIndex',
    desc: '表示初始开始轮播的容器，一般用来表示容器个数的下标',
    type: 'Number',
    defaultValue: '0'
  },
  {
    field: 'direction',
    desc: '表示走马灯轮播的方向,值分别有：horizontal vertical',
    type: 'String',
    defaultValue: 'horizontal'
  },
  {
    field: 'autoplay',
    desc: '表示是否自动轮播',
    type: 'Boolean',
    defaultValue: 'true'
  },
  {
    field: 'interval',
    desc: '表示走马灯每次轮播的时间',
    type: 'Number',
    defaultValue: '2000'
  },
  {
    field: 'pauseOnHover',
    desc: '表示鼠标在容器上方悬停的时候，是否停止播放',
    type: 'Boolean',
    defaultValue: 'true'
  },
  {
    field: 'indicatorPosition',
    desc: '表示走马灯指示标识 在容器的内部还是外部 值有：outside none, 注：只有字段{direction}是默认值的时候有效',
    type: 'String',
    defaultValue: 'none'
  },
  {
    field: 'loop',
    desc: '表示是否自动轮播',
    type: 'Boolean',
    defaultValue: 'true'
  },
]

export {
  example,
  example1,
  example2,
  example3,
  componentProps
}