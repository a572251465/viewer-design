import { App } from 'vue'
import InfiniteScroll from './src/infinite-scroll.vue'
import { IComponent } from '../utils/types'

InfiniteScroll.install = (app: App) => {
  app.component(InfiniteScroll.name, InfiniteScroll)
}

const _InfiniteScroll: IComponent<typeof InfiniteScroll> =
  InfiniteScroll as IComponent<typeof InfiniteScroll>

export default _InfiniteScroll
