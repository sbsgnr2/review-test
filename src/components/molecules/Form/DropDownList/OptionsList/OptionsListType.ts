import { OptionType } from "../DropDownListType"

export interface OptionsListType {
  handleSelect: ({ selectedValue }: { selectedValue: string }) => void
  options: OptionType[]
  backgroundList?: string
}
