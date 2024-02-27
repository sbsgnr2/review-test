import styles from './selectedValue.module.css'
import { ArrowDownIcon } from '@/components/atoms/Icons/arrow_down_icon'
import { ArrowUpIcon } from '@/components/atoms/Icons/arrow_up_icon'
import { getLabelByOptionValue } from '@/utils/functions/getLabelByOptionValue'
import { SelectedValueType } from './SelectedValueType'

export function SelectedValue({
  handleToggle,
  options,
  height,
  value,
  isOpen,
  variant = 'standard',
}: SelectedValueType) {
  return (
    <div
      className={styles.selected_option}
      style={{
        height,
        border: variant !== 'underline' ? 'solid 1px var(--border-color)' : 'undefined',
        borderBottom: !isOpen ? 'solid 1px var(--border-color)' : '2px solid var(--focused-color)',
      }}
      onClick={handleToggle}
    >
      <p>{getLabelByOptionValue({ value, options })}</p>
      {!isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
    </div>
  )
}
