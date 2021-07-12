import { App } from 'vue'
import VirtualList from './src/virtual-list.vue'

VirtualList.install = (app: App) => {
  app.component(VirtualList.name, VirtualList)
}
export default VirtualList
