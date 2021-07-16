import { App } from 'vue'
import VirtualList from './src/virtual-list.vue'
import { IComponent } from '../utils/types'

VirtualList.install = (app: App) => {
  app.component(VirtualList.name, VirtualList)
}

const _VirtualList: IComponent<typeof VirtualList> = VirtualList as IComponent<typeof VirtualList>

export default _VirtualList
