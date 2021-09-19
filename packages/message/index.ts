import { App } from 'vue'
import Message from './src/message'
;(Message as any).install = (app: App): void => {
  app.config.globalProperties.$Message = Message
}

export default Message
