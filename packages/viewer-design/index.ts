import Button from '@viewer/button'
import Icon from '@viewer/icon'
import Layout from '@viewer/layout'
import Col from '@viewer/col'
import Row from '@viewer/row'
import Input from '@viewer/input'
import Message from '@viewer/message'
import Mark from '@viewer/mask'
import { App } from 'vue'

const components = [
  Button,
  Icon,
  Layout,
  Col,
  Row,
  Input,
  Mark
]

const plugins = [
  Message
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(component => {
    app.use(component)
  })
}

export default { install }
