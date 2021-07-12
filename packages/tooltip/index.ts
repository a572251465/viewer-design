import { App } from 'vue'
import Tooltip from './src/tooltip.vue'

Tooltip.install = (app: App) => {
  app.component(Tooltip.name, Tooltip)
}
export default Tooltip
