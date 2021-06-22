import { computed, ref } from 'vue'

type ICommitModel = (val: string | number) => void

interface IUseModel {
  (val: number | string, events: ICommitModel): { value: string | number }
}

export const useModel: IUseModel = (val, events) => {
  const changeVal = ref<string | number>(val),
    result = computed<string | number>({
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
