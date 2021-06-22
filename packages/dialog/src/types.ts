// 表示是普通弹框 还是 怪异弹框（-- 针对定制化）
export const typeFun = () => 'normal' || 'strange'

interface IDialog {
  modelValue: string | number,
  title: string,
  width: number | string,
  fullscreen: boolean,
  top: string,
  type: ReturnType<typeof typeFun>
  model: boolean,
  lockScroll: boolean,
  openDelay: number,
  closeDelay: number,
  closeOnClickModel: boolean,
  closeOnPressEscape: boolean,
  showClose: boolean,
  beforeClose: Function,
  center: boolean,
  destroyOnClose: boolean,
  visibleTitle: boolean,
  visibleFooter: boolean,
  styles: object
}

type IDialogOptional = Partial<IDialog>
