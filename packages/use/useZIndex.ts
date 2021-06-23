import { getConfig } from '@viewer/utils/config'

const zIndexCache: number[] = []
export const useZIndex = (): number => {
  const defaultZIndex = getConfig('zIndex') as number
  let returnZIndex = 0
  if ( zIndexCache.length === 0 ) {
    returnZIndex = defaultZIndex
  } else {
    const lastZIndex = zIndexCache[zIndexCache.length - 1]
    returnZIndex = lastZIndex + 20
  }
  zIndexCache.push(returnZIndex)
  return returnZIndex
}
