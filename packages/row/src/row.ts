import { defineComponent, PropType, h, computed, provide } from 'vue';
import { globalContext, IExistContext, IPassvalue, styleCommonPrefix } from '@viewer/utils/types';

const justifyFun = () => 'start' || 'end' || 'center' || 'space-around' || 'space-between',
  alignFun = () => 'top' || 'middle' || 'bottom';
type IJustify = ReturnType<typeof justifyFun>
type IAlign = ReturnType<typeof alignFun>
type IAlignMap<T extends IAlign> = { [K in T]: string }
const alignMap: IAlignMap<IAlign> = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end'
};
// 表示从父类到子类合并类型
type IProvide<T> = IPassvalue<T> & IExistContext

export default defineComponent({
  name: 'cu-row',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String as PropType<IJustify>,
      default: 'start'
    },
    align: {
      type: String as PropType<IAlign>,
      default: 'top'
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props, { slots }) {
    // 给子类col传递数据
    provide<IProvide<number>>(globalContext.row, {
      passValue: props.gutter,
      existContext: globalContext.row
    });

    // 计算设置的样式
    const statePrefix = styleCommonPrefix.$statePrefix,
      classes = computed<(string | object)[]>(() => [
        `${ styleCommonPrefix.$namespace }-row`,
        {
          [[
            statePrefix,
            [ 'start', 'end' ].includes(props.justify) ? 'flex-' : '',
            props.justify
          ].join('')]: props.justify,
          [(statePrefix + alignMap[props.align])]: alignMap[props.align]
        }
      ]),
      styles = computed(() => ({
        marginLeft: (- props.gutter) + 'px',
        marginRight: (- props.gutter) + 'px'
      }));

    return () => {
      return h(props.tag, { class: classes.value, style: styles.value }, slots.default?.());
    };
  }
});
