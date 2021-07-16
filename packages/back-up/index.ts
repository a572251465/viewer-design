import { App } from 'vue'
import BackUp from './src/back-up.vue'
import { IComponent } from '../utils/types'

BackUp.install = (app: App) => {
  app.component(BackUp.name, BackUp)
}

const _BackUp: IComponent<typeof BackUp> = BackUp as IComponent<typeof BackUp>
export default _BackUp
