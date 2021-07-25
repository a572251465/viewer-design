import { App } from 'vue'
import Form from './src/form.vue'
import { IComponent } from '../utils/types'

Form.install = (app: App) => {
  app.component(Form.name, Form)
}

const _Form: IComponent<typeof Form> = Form as IComponent<typeof Form>

export default _Form
