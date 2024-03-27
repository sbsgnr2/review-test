import { DropDownListType } from './DropDownListType'
import { SelectInput } from './SelectInput'
import styles from './DropDownList.module.css'
import { InputErrorMessage } from '@/components/atoms/Forms/InputErrorMessage'

export function DropDownList({
  options,
  value,
  label,
  onChange,
  required = true,
  width = '10rem',
  height = '2rem',
  error,
  backgroundList = 'var(--main-bg-color)',
  fontSize = '0.7rem',
  fontWeight = '500',
  labelColor = 'var(--second-color)',
  borderRadius,
}: DropDownListType) {
  return (
    <div className={styles.container} style={{ width }}>
      <label className={styles.label} style={{ fontWeight, fontSize, color: labelColor }}>
        {`${label}`} {required ? '* ' : ''}
      </label>
      <SelectInput
        options={options}
        value={value}
        onChange={onChange}
        width={width}
        height={height}
        backgroundList={backgroundList}
        borderRadius={borderRadius}
      />
      <InputErrorMessage error={error} />
    </div>
  )
}
