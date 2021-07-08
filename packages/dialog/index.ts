import { App } from 'vue'
import Dialog from './src/dialog.vue'
import DialogDirective from './src/dialog-directive'

Dialog.install = (app: App) => {
  app.component(Dialog.name, Dialog)
  app.config.globalProperties.$Dialog = DialogDirective;
}

export default Dialog
