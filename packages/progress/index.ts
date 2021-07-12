import { App } from 'vue'
import Progress from './src/progress.vue'

Progress.install = (app: App) => {
  app.component(Progress.name, Progress)
}
export default Progress
