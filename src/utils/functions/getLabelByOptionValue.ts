import { OptionType } from "@/components/molecules/Form/DropDownList/DropDownListType"

export function getLabelByOptionValue({ value, options }: { value: string, options: OptionType[] }): string {
  const DEFAULT_LABEL = 'Select an option'
  const label =
    options.find((option: OptionType) => option.value === value)?.label || DEFAULT_LABEL
  return label
}
