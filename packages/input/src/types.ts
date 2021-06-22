const typeClassify = () => 'text' || 'textarea' || 'password'
const sizeClassify = () => 'big' || 'medium' || 'small' || 'mini'

export type IType = ReturnType<typeof typeClassify>
export type ISize = ReturnType<typeof sizeClassify>

export interface IInput {
  type?: IType,
  size?: ISize,
  modelValue?: string | number,
  maxlength?: number,
  minlength?: number,
  showWordLimit?: false,
  placeholder?: string,
  clearable?: boolean,
  prefixIcon?: string,
  suffixIcon?: string,
  rows?: number,
  autocomplete?: 'on' | 'off',
  name?: string,
  readonly?: boolean,
  max?: any,
  min?: any,
  tabindex?: string | number,
  inputStyle?: object,
  styles?: object,
  width?: number,
  autofocus?: boolean
}
