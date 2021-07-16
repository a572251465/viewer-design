import Button from '@viewer/button'
import Layout from '@viewer/layout'
import Col from '@viewer/col'
import Row from '@viewer/row'
import Input from '@viewer/input'
import Message from '@viewer/message'
import Mark from '@viewer/mask'
import Dialog, { ITypeDialog } from '@viewer/dialog'
import Link from '@viewer/link'
import Alert from '@viewer/alert'
import Drawer from '@viewer/drawer'
import BackUp from '@viewer/back-up'
import SlideTransition from '@viewer/slide-transition'
import { App } from 'vue'
import { InstallOption, setConfig } from '../utils/config'

const defaultInstallOpt: InstallOption = {
  dialogType: 'normal',
  zIndex: 2000
}

const components = [
  Button,
  Layout,
  Col,
  Row,
  Input,
  Mark,
  Dialog,
  Link,
  Alert,
  Drawer,
  BackUp,
  SlideTransition
]

const plugins = [
  Message,
  Dialog
]

const install = (app: App, opt: InstallOption) => {
  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(component => {
    app.use(component as any)
  })

  const option = Object.assign({}, defaultInstallOpt, opt)
  setConfig(option)
}

export default { install }

export {
  Button,
  Layout,
  Col,
  Row,
  Input,
  Mark,
  Dialog,
  Link,
  Alert,
  Drawer,
  BackUp,
  SlideTransition,
  Message,
  ITypeDialog
}
