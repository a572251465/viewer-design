import { App } from 'vue'
import Divider from './src/divider.vue'

Divider.install = (app: App) => {
  app.component(Divider.name, Divider)
}
export default Divider
