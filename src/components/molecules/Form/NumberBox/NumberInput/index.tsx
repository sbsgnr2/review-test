import { numberInputType } from './numberInputType'
import styles from './NumberInput.module.css'
import { ButtonContainer } from '../ButtonContainer'
import { useNumberInput } from './useNumberInput'
import { InputErrorMessage } from '@/components/atoms/Forms/InputErrorMessage'

export function NumberInput({
  value,
  changeValue,
  validationFunction,
  disabled = false,
  required = true,
  name,
  variant = 'standard',
  withErrorPadding = false,
  height,
}: numberInputType) {
  const {
    handleFocus,
    handleBlur,
    handleIncrement,
    handleDecrement,
    handleChange,
    inputValue,
    error,
  } = useNumberInput({ value, validationFunction, changeValue })
  return (
    <div className={variant === 'standard' ? styles.inputContainer : styles.outlined}>
      <input
        name={name}
        type='number'
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={styles.input}
        style={{
          borderColor: error ? 'var(--error-color)' : undefined,
          height,
          borderRight: 'none',
        }}
        disabled={disabled}
        required={required}
      />
      <ButtonContainer handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      {error && <InputErrorMessage error={error} withErrorPadding={withErrorPadding} />}
    </div>
  )
}
