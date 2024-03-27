import { FocusEvent } from 'react'

export interface numberBoxType {
  label: string
  value?: number
  changeValue: ({ value }: { value: number }) => void
  validationFunction?: (value: string) => string | null | Promise<string | null>
  disabled?: boolean
  required?: boolean
  name: string
  width?: string
  maxWidth?: string
  height?: string
  variant?: 'standard' | 'outlined' | 'border_focused_outlined'
  withErrorPadding?: boolean
  resetSignal?: boolean
}

export interface numberInputHookType {
  value: string | number
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
}

export interface handleNumberType { 
  value: number, 
  changeValue: ({ value }: { value: number }) => void
  handleError: any
  min?: number
}
