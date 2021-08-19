import {Ref} from 'vue'
export interface IIdenProvide {
    currentCheckedIndex: Ref<number>,
    componentIden: Ref<number>,
    changeIden: () => void,
    direction: string
}