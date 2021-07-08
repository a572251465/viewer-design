import { computed, defineComponent, ref } from 'vue'
import './index.scss'

export default defineComponent({
  name: 'code',
  setup(props, { slots }) {

    const contentShowFlag = ref<boolean>(true),
      showIcon = computed<string>(() => `cu-icon-${ contentShowFlag.value ? 'doubletop' : 'doublebottom' }`),
      panelShowHandle = () => {
        contentShowFlag.value = !contentShowFlag.value
      }

    return () => (
      <div class = "code-demo">
        <div class = "code-demo-display">
          { slots.default ? slots.default() : '' }
        </div>
        <cu-slide-transition>
          <div class = "code-demo-source" v-show = { contentShowFlag.value }>
            <div>sdfsdf</div>
            <div>sdfsdf</div>
            <div>sdfsdf</div>
            <div>sdfsdf</div>
            <div>sdfsdf</div>
            <div>sdfsdf</div>
            <div>sdfsdf</div>
            <div>sdfsdf</div>
            <div>sdfsdf</div>
            <div>sdfsdf</div>
          </div>
        </cu-slide-transition>
        <div class = "code-demo-fill"></div>
        <div class = "code-demo-fun">
          <i class = { showIcon.value } onClick = { panelShowHandle }></i>
          <span onClick = { panelShowHandle }>{ contentShowFlag.value ? '收起' : '展开' }</span>
          <a href = "javascript:void(0);" v-show = { contentShowFlag.value }>复制代码</a>
        </div>
      </div>
    )
  }
})
