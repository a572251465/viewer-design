export interface IDetail {
  name: string,
  remark: string,
  isShowName?: boolean,
  stepChild?: { desc: string }[]
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
        remark: '图标',
        stepChild: [
          { desc: '使用方法' },
          { desc: '图标集合' }
        ]
      },
      {
        name: 'Button',
        remark: '按钮',
        stepChild: [
          { desc: '基本用法' },
          { desc: '不同大小' },
          { desc: '不同状态' },
          { desc: '圆角按钮' },
          { desc: '禁用按钮' },
          { desc: '加载中按钮' },
          { desc: '具有icon按钮' },
          { desc: 'Button Props' }
        ]
      },
      {
        name: 'Link',
        remark: '文字链接',
        stepChild: [
          { desc: '基本用法' },
          { desc: '不同状态' },
          { desc: '不同icon' },
          { desc: 'Link Props' },
          { desc: 'Event Props' }
        ]
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
        remark: '输入框',
        stepChild: [
          { desc: '基本用法' },
          { desc: '不同类型' },
          { desc: '不同大小' },
          { desc: '计算输入字数' },
          { desc: '可清除的' },
          { desc: '前后图标' },
          { desc: '自动获取光标' },
          { desc: 'Input Props' },
          { desc: 'Event Props' }
        ]
      },
      {
        name: 'Rate',
        remark: '评分'
      },
      {
        name: 'Form',
        remark: '表单',
        stepChild: [
          { desc: '基本用法' }
        ]
      }
    ]
  },
  {
    title: 'Notice',
    detail: [
      {
        name: 'Alert',
        remark: '警告',
        stepChild: [
          { desc: '基本用法' },
          { desc: '不同类型' },
          { desc: '显示关闭图标' },
          { desc: '提示文字居中' },
          { desc: '自定义关闭文字' },
          { desc: '显示图标' },
          { desc: 'Alert Props' },
          { desc: 'Event Props' }
        ]
      },
      {
        name: 'Message',
        remark: '消息',
        stepChild: [
          { desc: '基本用法' },
          { desc: '不同类型' },
          { desc: '自定义图标' },
          { desc: '设置文字居中' },
          { desc: '显示关闭按钮' },
          { desc: '延长关闭时间' },
          { desc: 'Message Props' }
        ]
      }
    ]
  },
  {
    title: 'Popup',
    detail: [
      {
        name: 'Dialog',
        remark: '对话框',
        stepChild: [
          { desc: '基本用法' },
          { desc: '自定义标题以及宽度' },
          { desc: '自定义距离顶部的位置' },
          { desc: '多种关闭方式' },
          { desc: '隐藏头部 以及footer部' },
          { desc: '延迟 打开或是关闭弹框' },
          { desc: '弹框居中显示' },
          { desc: '强大的指令系统' },
          { desc: 'Dialog Props' },
          { desc: 'Event Props' }
        ]
      },
      {
        name: 'Drawer',
        remark: '抽屉',
        stepChild: [
          { desc: '基本用法' },
          { desc: '不同方向的打开方式' },
          { desc: '多种关闭弹框方式' },
          { desc: '自由设置大小' },
          { desc: 'Drawer Props' }
        ]
      },
      {
        name: 'Tooltip',
        remark: '文字提示'
      }
    ]
  },
  {
    title: 'Layout',
    detail: [
      {
        name: 'Col',
        remark: '布局',
        stepChild: [
          { desc: '基础用法' },
          { desc: '控制显示的顺序' },
          { desc: '控制左右间隔' },
          { desc: '实现列布局' },
          { desc: 'Layout Props' },
          { desc: 'Row Props' },
          { desc: 'Col Props' }
        ]
      }
    ]
  },
  {
    title: 'Other',
    detail: [
      {
        name: 'Mask',
        remark: '遮罩层',
        stepChild: [
          { desc: '居中显示' },
          { desc: 'Mask Props' },
          { desc: 'Mask Event' }
        ]
      },
      {
        name: 'BackUp',
        remark: '回到顶部',
        stepChild: [
          { desc: '基础用法' },
          { desc: 'Back-Up Props' },
          { desc: 'Back-Up Event' }
        ]
      },
      {
        name: 'SlideTransition',
        remark: '滑动'
      },
      {
        name: 'Carousel',
        remark: '走马灯'
      },
      {
        name: 'Collapse',
        remark: '折叠面板'
      },
      {
        name: 'InfiniteScroll',
        remark: '无限滚动'
      },
      {
        name: 'Pagination',
        remark: '分页'
      },
      {
        name: 'TimeLine',
        remark: '时间线',
        stepChild: [
          { desc: '基础用法' },
          { desc: '不同的状态' },
          { desc: '设置大小' },
          { desc: '设置图标' },
          { desc: 'Time-Line Props' },
          { desc: 'Time-Line-Item Props' }
        ]
      }
    ]
  }
]

export default menu
