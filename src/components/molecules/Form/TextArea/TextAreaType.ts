import { ChangeEvent } from "react"

export interface TextAreaType {
  label: string
  value?: string
  changeValue?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  rows?: number
  cols?: number
  disabled?: boolean
  required?: boolean
  variant?: 'standard' | 'outlined' | 'focused_outlined' | 'border_focused_outlined'
  inputFontSize?: string
  withErrorPadding?: boolean
  validationFunction?: (value: string) => string | null | Promise<string | null>
  width?: string
  height?: string
  marginTop?: string
  resizable?: boolean
  name: string
  backgroundColor?: string
  fontSize?: string
  fontWeight?: string
  labelColor?: string
  maxWidth?: string
}

export interface useTextAreaType {
  value?: string | number
  changeValue: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  validationFunction: (value: string) => string | null | Promise<string | null>
}
