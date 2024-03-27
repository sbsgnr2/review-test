import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react'

export interface textBoxtype {
  label: string
  value?: string | number
  changeValue?: (event: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  validationFunction?: (value: string) => string | null | Promise<string | null>
  onClick?: () => void
  disabled?: boolean
  required?: boolean
  name: string
  width?: string
  maxWidth?: string
  height?: string
  type?: 'text' | 'password' | 'email'
  variant: 'standard' | 'outlined' | 'focused_outlined' | 'border_focused_outlined' | 'rounded_outlined' | 'rounded_outlined_focus'
  withErrorPadding? : boolean
  placeholder?: string
  multiple?: boolean
  inputFontSize?: string
  fontSize?: string
  fontWeight?: string
  labelColor?: string
  positionTop?: string
}

export interface textBookHookType { value: string|number, onBlur?: (event: FocusEvent<HTMLInputElement>) => void}

export interface useTextBoxType {
  value?: string | number
  changeValue: (event: ChangeEvent<HTMLInputElement>) => void
  validationFunction: (value: string) => string | null | Promise<string | null>
}
