import { App } from 'vue'
import Dialog from './src/dialog.vue'
import DialogDirective from './src/dialog-directive'
import { IDialog } from './src/types'
import { IComponent } from '../utils/types'

const $selfDialog = DialogDirective
type ITypeDialog = IDialog

Dialog.install = (app: App) => {
  app.component(Dialog.name, Dialog)
  app.config.globalProperties.$Dialog = DialogDirective
}

const _Dialog: IComponent<typeof Dialog> = Dialog as IComponent<typeof Dialog>

export default _Dialog
export {
  $selfDialog,
  ITypeDialog
}
