import { App } from 'vue'
import Progress from './src/progress.vue'
import { IComponent } from '../utils/types'

Progress.install = (app: App) => {
  app.component(Progress.name, Progress)
}

const _Progress: IComponent<typeof Progress> = Progress as IComponent<
  typeof Progress
>

export default _Progress
