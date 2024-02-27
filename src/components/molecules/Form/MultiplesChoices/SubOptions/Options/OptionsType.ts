import { OptionType } from "../../MultiplesChoicesType"

export interface OptionsType {
  option: OptionType
  handleChange?: ({ value }: { value: string }) => void
}
