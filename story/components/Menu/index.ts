export interface IDetail {
  name: string,
  remark: string,
  isShowName?: boolean
}

export interface IMenuItem {
  title: string,
  detail: IDetail[]
}

const menu: IMenuItem[] = [
  {
    title: 'Basic',
    detail: [
      {
        name: 'Icon',
        remark: '图标'
      },
      {
        name: 'Button',
        remark: '按钮'
      },
      {
        name: 'Link',
        remark: '文字链接'
      },
      {
        name: 'Scrollbar',
        remark: '滚动条'
      }
    ]
  },
  {
    title: 'Form',
    detail: [
      {
        name: 'Input',
        remark: '输入框'
      },
      {
        name: 'Rate',
        remark: '评分'
      }
    ]
  },
  {
    title: 'Notice',
    detail: [
      {
        name: 'Alert',
        remark: '警告'
      },
      {
        name: 'Message',
        remark: '消息'
      }
    ]
  },
  {
    title: 'Popup',
    detail: [
      {
        name: 'Dialog',
        remark: '对话框'
      },
      {
        name: 'Drawer',
        remark: '抽屉'
      }
    ]
  },
  {
    title: 'Layout',
    detail: [
      {
        name: 'Col',
        remark: '布局'
      }
    ]
  },
  {
    title: 'Other',
    detail: [
      {
        name: 'Mark',
        remark: '遮罩层'
      },
      {
        name: 'BackUp',
        remark: '回到顶部'
      },
      {
        name: 'slideTransition',
        remark: '滑动'
      },
      {
        name: 'carousel',
        remark: '走马灯'
      },
      {
        name: 'Collapse',
        remark: '折叠面板'
      },
      {
        name: 'infiniteScroll',
        remark: '无限滚动'
      }
    ]
  }
]

export default menu
