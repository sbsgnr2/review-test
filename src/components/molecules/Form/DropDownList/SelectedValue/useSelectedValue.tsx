import { getColor, getLabelByOptionValue } from '@/utils/functions/getLabelByOptionValue'
import { useSelectedValueType } from './SelectedValueType'

export function useSelectedValue({ value, options }: useSelectedValueType) {
  const color = getColor({ value, options })
  const labelText = getLabelByOptionValue({ value, options })
  return { color, labelText }
}
