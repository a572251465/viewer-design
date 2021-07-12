import { App } from 'vue'
import InfiniteScroll from './src/infinite-scroll.vue'

InfiniteScroll.install = (app: App) => {
  app.component(InfiniteScroll.name, InfiniteScroll)
}
export default InfiniteScroll
