import { off, on } from '@viewer/utils/dom'
import { EVENT_CODE } from '@viewer/utils/define'

const escStack: Function[] = []

export const useEscLeave = (callback: () => void): (() => void) => {

  if ( escStack.includes(callback) ) return () => ({})
  escStack.push(callback)

  const closeHandle = (e: KeyboardEvent) => {
    if ( e.code === EVENT_CODE.esc ) callback && callback()
  }

  on(document, 'keydown', closeHandle)
  return () => {
    off(document, 'keydown', closeHandle)
    const localIndex = escStack.findIndex(fn => fn === callback)
    escStack.slice(localIndex, 1)
  }
}
