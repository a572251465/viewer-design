/**
 * @author lihh
 * @description 计算宽度以及高度 的单位
 * @param props 表示传递的高度 以及宽度
 */
export function computedUnit<T extends (number | string)>(computedVal: T): string {
  if ( typeof computedVal === 'number') return `${computedVal}px`
  return computedVal.endsWith('%') ? computedVal : `${computedVal}px`
}
