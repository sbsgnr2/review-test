export interface numberInputType {
  value?: number
  changeValue: ({ value }: { value: number }) => void
  validationFunction: (value: string) => string | null | Promise<string | null>
  disabled?: boolean
  required?: boolean
  name: string
  variant?: 'standard' | 'outlined' | 'border_focused_outlined'
  withErrorPadding?: boolean
  height: string
  resetSignal?: boolean
  min?: number
}

export interface useNumberInputType {
  value?: number
  changeValue: ({ value }: { value: number }) => void
  validationFunction: (value: string) => string | null | Promise<string | null>
  resetSignal?: boolean
  min?: number
}