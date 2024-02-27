import { OptionType } from "../Form/DropDownList/DropDownListType"

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
}
