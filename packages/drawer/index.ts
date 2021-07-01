import { App } from 'vue'
import Drawer from './src/drawer.vue'

Drawer.install = (app: App) => {
  app.component(Drawer.name, Drawer)
}
export default Drawer
