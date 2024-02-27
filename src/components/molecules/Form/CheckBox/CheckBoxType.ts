import { ChangeEvent } from "react"

export interface CheckBoxType {
  checked?: boolean|undefined
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
  label?: string
  checkLeft?: boolean
  withCheckedState?: boolean
}

export interface useCheckboxType { handleChange: (event: ChangeEvent<HTMLInputElement>) => void }
