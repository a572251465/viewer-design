export enum styleCommonPrefix {
  $namespace = 'cu',
  $statePrefix = 'is-',
  $modifierSeparator = '--',
  $elementSeparator = '__'
}

export enum globalContext {
  row = 'ROW--CONTEXT'
}

// 表示自上而下传递的值
export interface IPassvalue<T> {
  passValue: T
}
// 表示存在的上下文
export type IExistContext = { existContext: string }