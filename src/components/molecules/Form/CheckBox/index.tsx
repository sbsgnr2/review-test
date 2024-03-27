import styles from './CheckBox.module.css'
import { CheckBoxType } from './CheckBoxType'
import { useCheckbox } from './useCheckbox'

export function CheckBox({
  checked = false,
  handleChange = () => {},
  label = '',
  checkLeft = false,
  withCheckedState = false,
  arialLabel = 'option',
}: CheckBoxType) {
  const { handleChecked, checkedState } = useCheckbox({ handleChange })
  return (
    <label className={styles.label}>
      {!checkLeft && label}
      <input
        type='checkbox'
        checked={withCheckedState ? checkedState : checked}
        onChange={handleChecked}
        className={styles.input}
        aria-label={label?.length > 0 ? label : arialLabel}
      />
      {checkLeft && label}
    </label>
  )
}
