export interface inputLabelType {
  focused: boolean
  required: boolean
  labelText: string
  value?: string | number
  variant: 'standard' | 'outlined' | 'focused_outlined' | 'border_focused_outlined'
  positionTop?: string
  fontSize?: string
  fontWeight?: string
  color?: string
}