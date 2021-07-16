import { App } from 'vue'
import Carousel from './src/carousel.vue'
import { IComponent } from '../utils/types'

Carousel.install = (app: App) => {
  app.component(Carousel.name, Carousel)
}

const _Carousel: IComponent<typeof Carousel> = Carousel as IComponent<typeof Carousel>

export default _Carousel
