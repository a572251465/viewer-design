import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
import './index.scss'
import { ICodeDetail } from './types'

export default defineComponent({
  name: 'code-source',
  props: {
    targetCode: {
      type: [ Object, Array ] as PropType<ICodeDetail | ICodeDetail[]>,
      required: true
    },
    showFlag: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {

    const contentShowFlag = ref<boolean>(false)
    const showIcon = computed<string>(() => `cu-icon-${ contentShowFlag.value ? 'doubletop' : 'doublebottom' }`)
    const panelShowHandle = () => {
      contentShowFlag.value = !contentShowFlag.value
    }

    onMounted(() => {
      contentShowFlag.value = props.showFlag
    })

    // 使用template包装下
    const targetInfo = computed(() => {
      const parent: ICodeDetail = {
        labelName: 'template',
        children: Array.isArray(props.targetCode) ? props.targetCode : [ props.targetCode ]
      }
      return parent
    })

    // 创建子元素
    const startSymbol = '&lt;',
      endSymbol = '&gt;'
    const genChildrenElement = (children?: ICodeDetail[], spaceNum: number = 4) => {
      if ( !children || children.length === 0 ) return ''
      let htmlStr = ''
      children.forEach(el => {
        htmlStr += `
          <div class="lineHeight">
          ${ genSpace(spaceNum) }
          ${ genColorLabel(startSymbol, 2) }${ genColorLabel(el.labelName, 1) }
            ${ el.fields && el.fields.length > 0 ? genElementField(el.fields) : '' }
            ${ genColorLabel((isLastLabel(el) ? '' : '/') + endSymbol, 2) }
            ${ el.value ? genColorLabel(el.value, 2) : '' }
          ${ genChildrenElement(el.children, spaceNum + 4) }
          ${ isLastLabel(el, spaceNum) }
          </div>
        `
      })
      return htmlStr
    }

    // 判断是否需要结束符
    const isLastLabel = (el: ICodeDetail, spaceNum?: number): string => {
      if ( (!el.children || el.children.length === 0) && !el.value ) return ''
      return `${ el.value ? '' : genSpace(spaceNum) }${ genColorLabel(startSymbol, 2) }${ genColorLabel('/' + el.labelName, 1) }${ genColorLabel(endSymbol, 2) }`
    }

    // 用来生成颜色标签
    const genColorLabel = (label, val: number) => {
      // 1 标签 || 属性名
      // 2 分隔符 || 内容
      // 3 属性值
      const colorMap = {
        '1': 'labelColor',
        '2': 'separatorColor',
        '3': 'valueColor'
      }
      return `<span class = ${ colorMap[val + ''] }>${ label }</span>`
    }

    // 用来生成主代码
    const genRootElement = (root: ICodeDetail) => {
      const htmlStr = `${ genColorLabel(startSymbol, 2) }${ genColorLabel(root.labelName, 1) }${ genColorLabel(endSymbol, 2) }
        ${ genChildrenElement(root.children, 4) }
        ${ genColorLabel(startSymbol, 2) }${ genColorLabel('/' + root.labelName, 1) }${ genColorLabel(endSymbol, 2) }
      `
      return htmlStr
    }

    // 表示用来生成空格的
    const genSpace = num => num <= 0 ? '' : '&nbsp;'.repeat(num)

    // 创建元素属性
    const genElementField = (fields?: { key: string, value: string | boolean }[]): string => {
      return fields.reduce((pre, cur) =>
        pre += `${ genSpace(1) }${ genColorLabel(cur.key, 1) }${ genColorLabel(` = "${ cur.value }"`, 3) }`, '')
    }

    return () => (
      <div class = "code-demo">
        <div class = "code-demo-display">
          { slots.default ? slots.default() : '' }
        </div>
        <div class = "code-demo-source-parent">
          <cu-slide-transition>
            <div class = "code-demo-source" v-show = { contentShowFlag.value }>
              <div v-html = { genRootElement(targetInfo.value) }></div>
            </div>
          </cu-slide-transition>
        </div>
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
