import { App } from 'vue'
import Alert from './src/alert.vue'
import { IComponent } from '../utils/types'

Alert.install = (app: App): void => {
  app.component(Alert.name, Alert)
}
const _Alert: IComponent<typeof Alert> = Alert as IComponent<typeof Alert>
export default _Alert
