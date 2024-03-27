export interface OptionType { value: string; label: string }

export interface SelectedValueType {
  options: OptionType[]
  value: string
  handleToggle: () => void
  width?: string,
  height?: string,
  isOpen: boolean,
  variant?: 'standard' | 'underline'
  borderRadius?: string
}

export interface useSelectedValueType {
  value: string
  options: OptionType[]
}