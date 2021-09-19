import { App } from 'vue'
import SliderTransition from './src/slide-transition.vue'
import { IComponent } from '../utils/types'

SliderTransition.install = (app: App) => {
  app.component(SliderTransition.name, SliderTransition)
}

const _SliderTransition: IComponent<typeof SliderTransition> =
  SliderTransition as IComponent<typeof SliderTransition>

export default _SliderTransition
