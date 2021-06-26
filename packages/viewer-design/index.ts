import Button from '@viewer/button'
import Icon from '@viewer/icon'
import Layout from '@viewer/layout'
import Col from '@viewer/col'
import Row from '@viewer/row'
import Input from '@viewer/input'
import Message from '@viewer/message'
import Mark from '@viewer/mask'
import Dialog, { dialogDirective } from '@viewer/dialog'
import { App } from 'vue'
import { InstallOption, setConfig } from '@viewer/utils/config'

const defaultInstallOpt: InstallOption = {
  dialogType: 'normal',
  zIndex: 2000
}

const components = [
  Button,
  Icon,
  Layout,
  Col,
  Row,
  Input,
  Mark,
  Dialog
]

const plugins = [
  Message,
  dialogDirective
]

const install = (app: App, opt: InstallOption) => {
  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(component => {
    app.use(component)
  })

  const option = Object.assign({}, defaultInstallOpt, opt)
  setConfig(option)
}

export default { install }
