import Message from './src/message';
import { App } from 'vue';

export default (app: App) => {
  app.config.globalProperties.$Message = Message;
}
