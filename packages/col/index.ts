import { App } from 'vue'
import Col from './src/col'
import { IComponent } from '../utils/types'

Col.install = (app: App) => {
  app.component(Col.name, Col)
}

const _Col: IComponent<typeof Col> = Col as IComponent<typeof Col>
export default _Col
