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
      }
    ]
  },
  {
    title: 'Form',
    detail: [
      {
        name: 'Input',
        remark: '输入框'
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
      }
    ]
  }
]

export default menu
