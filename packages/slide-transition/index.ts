import { App } from 'vue'
import SliderTransition from './src/slide-transition.vue'

SliderTransition.install = (app: App) => {
  app.component(SliderTransition.name, SliderTransition)
}
export default SliderTransition
