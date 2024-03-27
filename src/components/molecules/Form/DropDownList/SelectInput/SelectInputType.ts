export interface OptionType { value: string; label: string; color?: string}

export interface SelectInputType {
  options: OptionType[]
  value: string
  onChange: (selectedValue: string) => void
  width?: string,
  height?: string,
  backgroundList?: string
  borderRadius?: string
}

export interface SelectInputHookType {
  onChange: (selectedValue: string) => void
}
