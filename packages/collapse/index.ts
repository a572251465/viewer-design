import { App } from 'vue'
import Collapse from './src/collapse.vue'
import { IComponent } from '../utils/types'

Collapse.install = (app: App) => {
  app.component(Collapse.name, Collapse)
}

const _Collapse: IComponent<typeof Collapse> = Collapse as IComponent<
  typeof Collapse
>

export default _Collapse
