import styles from './selectedValue.module.css'
import { ArrowDownIcon } from '@/components/atoms/Icons/arrow_down_icon'
import { ArrowUpIcon } from '@/components/atoms/Icons/arrow_up_icon'
import { SelectedValueType } from './SelectedValueType'
import { useSelectedValue } from './useSelectedValue'

export function SelectedValue({
  handleToggle,
  options,
  height,
  value,
  isOpen,
  variant = 'standard',
  borderRadius = '0',
}: SelectedValueType) {
  const { color, labelText } = useSelectedValue({ value, options })
  return (
    <div
      className={styles.selected_option}
      style={{
        height,
        border: variant !== 'underline' ? 'solid 1px var(--border-color)' : 'undefined',
        borderBottom: !isOpen ? 'solid 1px var(--border-color)' : '2px solid var(--focused-color)',
        borderRadius: borderRadius ? borderRadius : undefined,
      }}
      onClick={handleToggle}
    >
      <div className={styles.selected}>
        {color && <span className={styles.circle} style={{ backgroundColor: color }}></span>}
        <p>{labelText}</p>
      </div>
      {!isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
    </div>
  )
}
