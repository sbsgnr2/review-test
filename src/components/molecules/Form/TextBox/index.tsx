import styles from './TextBox.module.css'
import { InputLabel } from '@/components/atoms/Forms/InputLabel'
import { InputErrorMessage } from '@/components/atoms/Forms/InputErrorMessage'
import { textBoxtype } from '@/components/molecules/Form/TextBox/textBoxType'
import { useTextBox } from './useTextBox'

export function TextBox({
  label,
  value,
  changeValue = () => {
    return null
  },
  onKeyDown = () => {
    return null
  },
  validationFunction = () => {
    return null
  },
  disabled = false,
  required = true,
  name,
  width = '100%',
  maxWidth = '100%',
  height = '2.4rem',
  type = 'text',
  variant = 'standard',
  withErrorPadding = false,
  placeholder = '',
  multiple = false,
  inputFontSize = '0.85rem',
  fontSize,
  fontWeight,
  labelColor = 'var(--primary-color)',
}: textBoxtype) {
  const { focused, handleFocus, handleBlur, inputValue, handleChange, error } = useTextBox({
    changeValue,
    value,
    validationFunction,
  })
  return (
    <div
      className={
        ['outlined'].includes(variant)
          ? styles.outlined
          : ['border_focused_outlined'].includes(variant)
          ? styles.borderOutlined
          : styles.textBoxContainer
      }
      style={{
        width,
        maxWidth,
        paddingBottom: withErrorPadding ? '1.4rem' : 0,
        marginTop: withErrorPadding ? '1.3rem' : '2rem',
      }}
    >
      <InputLabel
        value={inputValue}
        focused={focused}
        required={required}
        labelText={label}
        variant={variant}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={labelColor}
      />
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        className={styles.input}
        style={{
          borderColor: error ? 'var(--error-color)' : undefined,
          height,
          fontSize: inputFontSize,
        }}
        disabled={disabled}
        placeholder={placeholder}
        multiple={multiple}
      />
      {error && <InputErrorMessage error={error} withErrorPadding={withErrorPadding} />}
    </div>
  )
}