import { computed, ref } from 'vue'

type T = string | number | boolean
type ICommitModel = (val: T) => void

interface IUseModel {
  (val: T, events: ICommitModel): { value: T }
}

export const useModel: IUseModel = (val, events) => {
  const changeVal = ref<T>(val),
    result = computed<T>({
      get() {
        return changeVal.value
      },
      set(newVal) {
        changeVal.value = newVal
        events(newVal)
      }
    })
  return result
}
