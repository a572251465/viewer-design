export interface InstallOption {
  zIndex: number
  dialogType: 'normal' | 'strange'
}

let $ELEMENT = {} as InstallOption

const setConfig = (option: InstallOption) => {
  $ELEMENT = option
}

const getConfig = (key: keyof InstallOption): any => $ELEMENT[key]

export { setConfig, getConfig }
