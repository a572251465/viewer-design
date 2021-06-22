import { App } from 'vue'
import Col from './src/col'

Col.install = (app: App) => {
  app.component(Col.name, Col)
}
export default Col
