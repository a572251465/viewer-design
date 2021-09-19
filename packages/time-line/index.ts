import { App } from 'vue'
import TimeLine from './src/time-line'
import { IComponent } from '../utils/types'

TimeLine.install = (app: App) => {
  app.component(TimeLine.name, TimeLine)
}

const _TimeLine: IComponent<typeof TimeLine> = TimeLine as IComponent<
  typeof TimeLine
>

export default _TimeLine
