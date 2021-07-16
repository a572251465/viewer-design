import { App } from 'vue'
import Layout from './src/layout'
import { IComponent } from '../utils/types'

Layout.install = (app: App) => {
  app.component(Layout.name, Layout)
}

const _Layout: IComponent<typeof Layout> = Layout as IComponent<typeof Layout>

export default _Layout
