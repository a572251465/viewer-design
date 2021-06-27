export const typeFun = () => 'info' || 'success' || 'warning' || 'danger' || 'confirm'

interface IDialog {
  modelValue: boolean,
  title: string,
  width: number | string,
  height: number | string,
  top: string,
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
