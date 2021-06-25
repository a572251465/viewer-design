// 表示是普通弹框 还是 怪异弹框（-- 针对定制化）
export const typeFun = () => 'normal' || 'strange'

interface IDialog {
  modelValue: boolean,
  title: string,
  width: number | string,
  height: number | string,
  top: string,
  type: ReturnType<typeof typeFun>
  closeOnClickModel: boolean,
  lockScroll: boolean,
  openDelay: number,
  closeDelay: number,
  closeOnPressEscape: boolean,
  showClose: boolean,
  beforeClose: Function,
  center: boolean,
  destroyOnClose: boolean,
  visibleHeader: boolean,
  visibleFooter: boolean,
  styles: object,
  isDirective: boolean
  zIndex: number
}

export type IDialogOptional = Partial<IDialog>

export interface IBeforeClose {
  (): any | Promise<any>
}
