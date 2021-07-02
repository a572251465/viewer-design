import { App } from 'vue'
import BackUp from './src/back-up.vue'

BackUp.install = (app: App) => {
  app.component(BackUp.name, BackUp)
}
export default BackUp
