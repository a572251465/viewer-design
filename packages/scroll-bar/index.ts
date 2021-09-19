import { App } from 'vue'
import ScrollBar from './src/scroll-bar.vue'
import { IComponent } from '../utils/types'

ScrollBar.install = (app: App) => {
  app.component(ScrollBar.name, ScrollBar)
}

const _ScrollBar: IComponent<typeof ScrollBar> = ScrollBar as IComponent<
  typeof ScrollBar
>
export default _ScrollBar
