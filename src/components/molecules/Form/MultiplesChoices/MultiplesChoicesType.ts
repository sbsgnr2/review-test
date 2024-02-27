export interface SubOptionsType {
  value: string
  label: string
}

export interface OptionType {
  key: string
  subtitle?: string
  options: SubOptionsType[]
}

export interface MultiplesChoicesType {
  checked?: boolean
  handleChange?: ({ value }: { value: string }) => void
  label?: string
  options: OptionType[]
  width?: string
  fontSize?: string
  labelSize?: string
  backgroundColor?: string
  borderColor?: string
  fontWeight?: string
  labelColor?: string
  margin?: string
  padding?: string
}
