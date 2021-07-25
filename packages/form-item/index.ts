import { App } from 'vue'
import FormItem from './src/form-item.vue'
import { IComponent } from '../utils/types'

FormItem.install = (app: App) => {
  app.component(FormItem.name, FormItem)
}

const _FormItem: IComponent<typeof FormItem> = FormItem as IComponent<typeof FormItem>

export default _FormItem
