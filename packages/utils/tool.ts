export const throttle = (fn, time) => {
  let timer = null
  if ( typeof time === 'undefined' ) time = 500
  return () => {
    if ( timer ) return
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
    }, time)
    fn()
  }
}
