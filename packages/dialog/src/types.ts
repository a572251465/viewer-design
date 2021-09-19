export const typeFun = () =>
  'info' || 'success' || 'warning' || 'danger' || 'confirm'

interface IDialogOptions {
  modelValue: boolean
  title: string
  width: number | string
  height: number | string
  top: string
  type: ReturnType<typeof typeFun>
  closeOnClickModel: boolean
  lockScroll: boolean
  openDelay: number
  closeDelay: number
  closeOnPressEscape: boolean
  showClose: boolean
  beforeClose: Function
  ok: Function
  cancel: Function
  center: boolean
  destroyOnClose: boolean
  visibleHeader: boolean
  visibleFooter: boolean
  styles: object
  isDirective: boolean
  zIndex: number
  message: string
  isSupportHtml: boolean
}

export type IDialogOptional = Partial<IDialogOptions>

export interface IBeforeClose {
  (): any | Promise<any>
}

export interface ICacheDialogInstance<T = { el: HTMLDivElement }> {
  [key: string]: T
}

export type ISingleDialog = (options: IDialogOptional | string) => void

export interface IDialog {
  (options: IDialogOptional | string): void

  primary?: ISingleDialog
  success?: ISingleDialog
  warning?: ISingleDialog
  danger?: ISingleDialog
  info?: ISingleDialog
  confirm?: ISingleDialog
}
