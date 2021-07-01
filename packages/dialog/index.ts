import { App } from 'vue'
import Dialog from './src/dialog.vue'
import DialogDirective from './src/dialog-directive'
const selfDialogDirective = DialogDirective

Dialog.install = (app: App) => {
  app.component(Dialog.name, Dialog)
}

const dialogDirective = (app: App) => {
  app.config.globalProperties.$Dialog = DialogDirective;
}
export {
  dialogDirective,
  selfDialogDirective
}

export default Dialog
