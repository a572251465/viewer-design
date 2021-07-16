import { App } from 'vue'
import Mask from './src/mask.vue'
import { IComponent } from '../utils/types'

Mask.install = (app: App) => {
  app.component(Mask.name, Mask)
}

const _Mask: IComponent<typeof Mask> = Mask as IComponent<typeof Mask>

export default _Mask
