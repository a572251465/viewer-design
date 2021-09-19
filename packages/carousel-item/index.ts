import { App } from 'vue'
import CarouselItem from './src/carousel-item.vue'
import { IComponent } from '../utils/types'

CarouselItem.install = (app: App) => {
  app.component(CarouselItem.name, CarouselItem)
}

const _CarouselItem: IComponent<typeof CarouselItem> =
  CarouselItem as IComponent<typeof CarouselItem>

export default _CarouselItem
