import { OptionType } from "../MultiplesChoicesType"

export interface SuboptionsType {
  handleChange?: ({ value }: { value: string }) => void
  options: OptionType[]
  backgroundColor?: string
  borderColor?: string
  padding?: string
}
