import { ChangeEventHandler } from "react"

export interface OptionType {
  value: string
  label: string
}

export interface RadioButtonsType {
  options: OptionType[]
  handleChange?: () => void
  label: string
  name: string
  defaultValue: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  isHorizontal?: boolean
}