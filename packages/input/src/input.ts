import { Ref } from 'vue'

/**
 * @author lihh
 * @description 表示自动获取焦点事件
 * @param el 表示元素内容
 */
const autoFocusHandle = (el: Ref<HTMLInputElement>) => {
  el.value.focus()
}

export default autoFocusHandle
