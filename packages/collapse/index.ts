import { App } from 'vue'
import Collapse from './src/collapse.vue'

Collapse.install = (app: App) => {
  app.component(Collapse.name, Collapse)
}
export default Collapse
