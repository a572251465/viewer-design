import { App } from 'vue'
import Link from './src/link.vue'
import { IComponent } from '../utils/types'

Link.install = (app: App) => {
  app.component(Link.name, Link)
}

const _Link: IComponent<typeof Link> = Link as IComponent<typeof Link>

export default _Link
