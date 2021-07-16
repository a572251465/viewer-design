import { App } from 'vue'
import Tooltip from './src/tooltip.vue'
import { IComponent } from '../utils/types'

Tooltip.install = (app: App) => {
  app.component(Tooltip.name, Tooltip)
}

const _Tooltip: IComponent<typeof Tooltip> = Tooltip as IComponent<typeof Tooltip>

export default _Tooltip
