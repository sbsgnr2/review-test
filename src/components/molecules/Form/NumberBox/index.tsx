import styles from './NumberBox.module.css'
import { numberBoxType } from './numberBoxType'
import { NumberInput } from './NumberInput'
import { InputLabel } from '@/components/atoms/Forms/InputLabel'

export function NumberBox({
  label,
  value,
  changeValue,
  validationFunction = () => {
    return null
  },
  disabled = false,
  required = true,
  name,
  width = '100%',
  maxWidth = '100%',
  height = '2.4rem',
  withErrorPadding = false,
  variant = 'border_focused_outlined',
}: numberBoxType) {
  return (
    <>
      <div
        className={styles.textBoxContainer}
        style={{
          width,
          maxWidth,
          paddingBottom: withErrorPadding ? '1.4rem' : 0,
          marginTop: withErrorPadding ? '1.3rem' : '2rem',
        }}
      >
        <InputLabel
          value={label}
          focused={true}
          required={required}
          labelText={label}
          variant='border_focused_outlined'
        />
        <NumberInput
          value={value}
          changeValue={changeValue}
          disabled={disabled}
          validationFunction={validationFunction}
          name={name}
          required={required}
          variant={variant}
          height={height}
        />
      </div>
    </>
  )
}
