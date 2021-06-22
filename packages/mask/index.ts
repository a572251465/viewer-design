import { App } from 'vue'
import Mask from './src/mask.vue'

Mask.install = (app: App) => {
  app.component(Mask.name, Mask)
}
export default Mask
