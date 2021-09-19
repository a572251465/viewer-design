import { render, createVNode, nextTick } from 'vue'
import instance from './message.vue'
import { IMessage, IMessageQueue, ITransformOptions } from './types'

let messageId = 0

const messageQueue: IMessageQueue[] = []

/**
 * @author lihh
 * @description 删除某个message元素 移动其他的元素的位置
 * @param id 表示每个元素节点id
 */
const useClose = (id: number) => {
  const localIndex = messageQueue.findIndex(
    (item: IMessageQueue) => item.id === id
  )
  if (localIndex === -1) return
  const { $el, height: removedHeight } = messageQueue[localIndex]

  // 判断页面中节点元素
  render(null, $el)
  nextTick(() => document.body.removeChild($el))

  // 判断如果只有一个元素 直接删除
  if (messageQueue.length === 1) {
    messageQueue.length = 0
    return
  }
  messageQueue.splice(localIndex, 1)

  let i = localIndex
  for (; i < messageQueue.length; i += 1) {
    const { vm } = messageQueue[i]
    const pos = parseInt(vm.el.style.top, 10) - removedHeight - 16
    vm.component.props.offset = pos
  }
}

const messageInstance: IMessage = (options) => {
  // ------------- 判断参数类型 以及创建真实的dom -----------------
  if (typeof options === 'string')
    options = { message: options, iconClass: 'success' }
  const rootMessageName = `message-root-${messageId}`
  const removedId = messageId
  const element = document.createElement('div')
  element.id = rootMessageName

  // ---------------- 计算弹框message 偏移量的高度 ---------------
  let verticalOffset = options.offset || 20
  messageQueue.forEach(({ vm }) => {
    verticalOffset += (vm.el.offsetHeight || 0) + 16
  })
  verticalOffset += 16
  options.offset = verticalOffset

  // ---------------- 重写用户的close方法 -----------------------
  const userClose = options.onClose
  options = {
    ...options,
    onClose: () => {
      userClose?.()
      useClose(removedId)
    }
  }

  // ---------------- 渲染虚拟dom ----------------------------
  const vNode = createVNode(instance, options)
  render(vNode, element)
  document.body.appendChild(element)
  nextTick(() => {
    messageQueue.push({
      vm: vNode,
      $el: element,
      id: removedId,
      height: vNode.el.offsetHeight
    })
  })
  messageId += 1
}

// --------------------- 循环赋值渲染 success, warning, danger, info 组件 -------------------
;(['success', 'warning', 'danger', 'info'] as const).forEach((classify) => {
  messageInstance[classify] = function (options: ITransformOptions | string) {
    if (typeof options === 'string') {
      options = {
        type: classify,
        message: options
      }
    }
    if (!options.iconClass) options.iconClass = classify
    if (!options.type) options.type = classify
    return messageInstance(options)
  }
})

export default messageInstance
