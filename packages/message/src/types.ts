import { VNode } from 'vue'

const typeClassify = () => 'success' || 'warning' || 'danger' || 'info'
export type IType = ReturnType<typeof typeClassify>

export interface IMessageOptions {
  message: string
  type: IType
  iconClass: string
  isSupportHtml: boolean
  showClose: boolean
  center: boolean
  onClose: Function
  offset: number
  delay: number
}

export type ITransformOptions = Partial<Omit<IMessageOptions, 'message'>> &
  Pick<IMessageOptions, 'message'>
export type ISingleMessage = (options: ITransformOptions | string) => void

export interface IMessage {
  (options: ITransformOptions | string): void

  primary?: ISingleMessage
  success?: ISingleMessage
  warning?: ISingleMessage
  danger?: ISingleMessage
  info?: ISingleMessage
}

export type IMessageQueue = {
  vm: VNode
  $el: HTMLElement
  id: number
  height: 0
}
