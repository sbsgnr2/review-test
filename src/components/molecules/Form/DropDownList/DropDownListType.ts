export interface OptionType { value: string; label: string }

export interface DropDownListType {
  options: OptionType[]
  value: string
  onChange: (selectedValue: string) => void
  width?: string,
  height?: string,
  label: string,
  required?: boolean,
  error: string | null
  backgroundList?: string
  fontSize?: string
  fontWeight?: string
  labelColor?: string
}
