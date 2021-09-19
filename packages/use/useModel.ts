import { computed, ref } from 'vue'

type T = string | number | boolean
type ICommitModel = (val: T) => void

interface IUseModel {
  (val: T, events: ICommitModel): { value: T }
}

const useModel: IUseModel = (val, events) => {
  const changeVal = ref<T>(val)
  const result = computed<T>({
    get() {
      return changeVal.value
    },
    set(newVal) {
      if (newVal === changeVal.value) return
      changeVal.value = newVal
      events(newVal)
    }
  })

  return result
}

export default useModel
