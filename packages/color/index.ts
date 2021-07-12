import { App } from 'vue'
import Color from './src/color.vue'

Color.install = (app: App) => {
  app.component(Color.name, Color)
}
export default Color
