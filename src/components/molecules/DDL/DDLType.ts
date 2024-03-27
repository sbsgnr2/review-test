import { OptionType } from '../Form/DropDownList/DropDownListType'

export interface DDLType {
  options: OptionType[]
  handleChange: (selectedValue: string) => void
  label: string
  backgroundList?: string
  fontWeight?: string
  width?: string
  required?: boolean
  value?: string | null
  height?: string
  borderRadius?: string
  color?: string
  fontSize?: string
}

export interface useDDLType {
  value?: string | null
  handleChange: (selectedValue: string) => void
}