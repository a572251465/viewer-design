import { App } from 'vue'
import TimeLineItem from './src/time-line-item.vue'
import { IComponent } from '../utils/types'

TimeLineItem.install = (app: App) => {
  app.component(TimeLineItem.name, TimeLineItem)
}

const _TimeLineItem: IComponent<typeof TimeLineItem> = TimeLineItem as IComponent<typeof TimeLineItem>

export default _TimeLineItem
