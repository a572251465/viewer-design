import { App } from 'vue'
import Row from './src/row'
import { IComponent } from '../utils/types'

Row.install = (app: App) => {
  app.component(Row.name, Row)
}

const _Row: IComponent<typeof Row> = Row as IComponent<typeof Row>

export default _Row
