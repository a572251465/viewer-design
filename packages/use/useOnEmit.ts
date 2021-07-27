type IWillType = string | number | object | boolean

interface ISubFun {
  (...values: IWillType[]): IWillType,

  l?: ISubFun
}

class PublishSubscribe {
  public pool: { [keyName: string]: ISubFun[] } = {}

  on(name: string, event: ISubFun) {
    const target = this.pool[name]
    if ( Array.isArray(target) ) {
      target.push(event)
    } else {
      (this.pool[name] = []).push(event)
    }
  }

  emit(name: string, ...args: IWillType[]) {
    const target = this.pool[name]
    if ( !Array.isArray(target) ) return false
    target.forEach(fn => fn(...args))
  }

  off(name: string, event: ISubFun) {
    const target = this.pool[name] || []
    this.pool[name] = target.filter(fn => fn !== event && fn.l !== event)
  }

  once(name: string, event: ISubFun) {
    const callback = () => {
      event()
      this.off(name, callback as ISubFun)
    }
    callback.l = event
    this.on(name, callback as ISubFun)
  }
}

const instance = new PublishSubscribe()
let existObj: PublishSubscribe
export default (existObj || (existObj = instance))
