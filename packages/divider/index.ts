import { App } from 'vue'
import Divider from './src/divider.vue'
import { IComponent } from '../utils/types'

Divider.install = (app: App) => {
  app.component(Divider.name, Divider)
}

const _Divider: IComponent<typeof Divider> = Divider as IComponent<typeof Divider>

export default _Divider
