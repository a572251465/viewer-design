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
export const isEmpty = value => value !== 0 && !value
export const isNotEmpty = value => !!value
export const isNumber = value => typeof value === 'number'
export const isString = value => typeof value === 'string'
export const isPhone = value => /^[1][0-9]{10}/gi.test(value)
export const isEmail = value => /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/.test(value)
export const isHttp = value => /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(value)
