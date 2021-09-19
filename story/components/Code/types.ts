export interface ICodeDetail {
  labelName: string
  fields?: { key: string; value: string | boolean }[]
  children?: ICodeDetail[]
  value?: string
}
