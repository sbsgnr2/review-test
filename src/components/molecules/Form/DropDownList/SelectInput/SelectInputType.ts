export interface OptionType { value: string; label: string }

export interface SelectInputType {
  options: OptionType[]
  value: string
  onChange: (selectedValue: string) => void
  width?: string,
  height?: string,
  backgroundList?: string
}

export interface SelectInputHookType {
  onChange: (selectedValue: string) => void
}
