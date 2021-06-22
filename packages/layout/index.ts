import { App } from 'vue'
import Layout from './src/layout'

Layout.install = (app: App) => {
  app.component(Layout.name, Layout)
}
export default Layout
