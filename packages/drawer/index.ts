import { App } from 'vue'
import Drawer from './src/drawer.vue'
import { IComponent } from '../utils/types'

Drawer.install = (app: App) => {
  app.component(Drawer.name, Drawer)
}

const _Drawer: IComponent<typeof Drawer> = Drawer as IComponent<typeof Drawer>

export default _Drawer
