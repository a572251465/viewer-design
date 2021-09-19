/**
 * @author lihh
 * @description 计算宽度以及高度 的单位
 * @param props 表示传递的高度 以及宽度
 */
import { createVNode, nextTick, render } from 'vue'
import { ICacheDialogInstance, IDialog, IDialogOptional } from './types'
import dialogInstance from './dialog.vue'

export function computedUnit<T extends number | string>(
  computedVal: T
): string {
  if (typeof computedVal === 'number') return `${computedVal}px`
  return computedVal.endsWith('%') ? computedVal : `${computedVal}px`
}

const defaultOptions: IDialogOptional = {
  isDirective: true,
  type: 'info',
  center: true,
  width: '400px',
  beforeClose: Function.prototype,
  ok: Function.prototype,
  cancel: Function.prototype
}

let dialogId = 0
const cacheDialogInstance: ICacheDialogInstance = {}

const dialog: IDialog = (options) => {
  if (typeof options === 'string') {
    if (!options) throw new Error('message is a required value')
    options = { message: options }
  }
  options = { ...defaultOptions, ...options }

  dialogId += 1
  const currentDialogId = dialogId
  const el = document.createElement('div')
  el.id = `dialog-popup-${currentDialogId}`

  // ---------------------- 重写beforeClose方法 ------------------
  const userBeforeClose = (options as IDialogOptional).beforeClose
  options = {
    ...options,
    beforeClose: () => {
      // ----------------------- 使用promise 异步删除元素 ----------------
      const p = Promise.resolve(userBeforeClose())
      p.finally(() => {
        let timer = setTimeout(() => {
          const dialogObj = cacheDialogInstance[`${currentDialogId}`]
          if (!dialogObj) return
          const { el } = dialogObj
          render(null, el)

          nextTick(() => document.body.removeChild(el))
          Reflect.deleteProperty(cacheDialogInstance, `${currentDialogId}`)
          clearTimeout(timer)
          timer = null
        }, 2000)
      })
      return p
    }
  }

  // --------------------- 挂载元素 --------------------------------
  const vNode = createVNode(dialogInstance, options as IDialogOptional)
  render(vNode, el)
  document.body.appendChild(el)
  nextTick(() => (cacheDialogInstance[`${currentDialogId}`] = { el }))
}

// ------------------------- 循环赋值 success warning danger info 组件----------------------
;(['success', 'warning', 'danger', 'info', 'confirm'] as const).forEach(
  (classify) => {
    dialog[classify] = function (options: IDialogOptional | string) {
      if (typeof options === 'string') {
        options = {
          type: classify,
          message: options
        }
      }

      if (!options.type) options.type = classify
      options.isDirective = true
      return dialog(options)
    }
  }
)

export default dialog
