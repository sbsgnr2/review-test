import { TextAreaType } from './TextAreaType'
import styles from './TextArea.module.css'
import { InputLabel } from '@/components/atoms/Forms/InputLabel'
import { InputErrorMessage } from '@/components/atoms/Forms/InputErrorMessage'
import { useTextArea } from './useTextArea'
import { ChangeEvent } from 'react'

export function TextArea({
  value,
  changeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {},
  width = '100%',
  height = 'max-content',
  placeholder = '',
  rows = 6,
  cols = 30,
  required = false,
  disabled = false,
  variant = 'standard',
  inputFontSize = '0.85rem',
  withErrorPadding = false,
  marginTop = '0',
  resizable = false,
  label,
  name,
  backgroundColor = 'var(--main-bg-color)',
  fontWeight,
  fontSize,
  maxWidth = '100%',
  validationFunction = () => {
    return null
  },
  labelColor = 'var(--primary-color)',
}: TextAreaType) {
  const { focused, handleFocus, handleBlur, inputValue, handleChange, error } = useTextArea({
    changeValue,
    value,
    validationFunction,
  })

  return (
    <div
      className={variant === 'outlined' ? styles.outlined : styles.textareaContainer}
      style={{
        width,
        height,
        paddingBottom: withErrorPadding ? '1.4rem' : 0,
        marginTop: withErrorPadding ? '1.3rem' : '2rem',
        maxWidth,
      }}
    >
      <InputLabel
        value={inputValue}
        focused={focused}
        required={required}
        labelText={label}
        variant={variant}
        positionTop='15%'
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={labelColor}
      />
      <textarea
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        name={name}
        style={{
          resize: !resizable ? 'none' : undefined,
          marginTop,
          borderColor: error ? 'var(--error-color)' : undefined,
          fontSize: inputFontSize,
          backgroundColor,
        }}
        disabled={disabled}
      />
      {error && <InputErrorMessage error={error} withErrorPadding={withErrorPadding} />}
    </div>
  )
}
