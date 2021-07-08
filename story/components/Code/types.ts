export interface ICodeDetail {
  labelName: string,
  fields?: { key: string, value: string }[]
  children?: ICodeDetail[],
  value?: string
}
