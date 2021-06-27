// 表示是普通弹框 还是 怪异弹框（-- 针对定制化）
export const patternFun = () => 'normal' || 'strange'
export const typeFun = () => 'info' || 'success' || 'warning' || 'danger' || 'confirm'

interface IDialog {
  modelValue: boolean,
  title: string,
  width: number | string,
  height: number | string,
  top: string,
  pattern: ReturnType<typeof patternFun>,
  type: ReturnType<typeof typeFun>,
  closeOnClickModel: boolean,
  lockScroll: boolean,
  openDelay: number,
  closeDelay: number,
  closeOnPressEscape: boolean,
  showClose: boolean,
  beforeClose: Function,
  ok: Function,
  cancel: Function,
  center: boolean,
  destroyOnClose: boolean,
  visibleHeader: boolean,
  visibleFooter: boolean,
  styles: object,
  isDirective: boolean
  zIndex: number,
  message: string,
  isSupportHtml: boolean
}

export type IDialogOptional = Partial<IDialog>

export interface IBeforeClose {
  (): any | Promise<any>
}

export interface ICacheDialogInstance<T = {el: HTMLDivElement}> {
  [key: string]: T
}
