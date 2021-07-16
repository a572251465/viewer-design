import { App } from 'vue'
import Color from './src/color.vue'
import { IComponent } from '../utils/types'

Color.install = (app: App) => {
  app.component(Color.name, Color)
}

const _Color: IComponent<typeof Color> = Color as IComponent<typeof Color>

export default _Color
