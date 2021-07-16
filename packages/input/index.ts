import { App } from 'vue'
import Input from './src/input.vue'
import { IComponent } from '../utils/types'

Input.install = (app: App) => {
  app.component(Input.name, Input)
}

const _Input: IComponent<typeof Input> = Input as IComponent<typeof Input>

export default _Input
