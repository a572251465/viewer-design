import Message from './src/message'
import { App } from 'vue'

(Message as any).install = (app: App): void => {
  app.config.globalProperties.$Message = Message
}

export default Message
