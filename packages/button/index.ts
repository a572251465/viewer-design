import { App } from 'vue'
import Button from './src/button.vue'
import { IComponent } from '../utils/types'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

const _Button: IComponent<typeof Button> = Button as IComponent<typeof Button>
export default _Button
