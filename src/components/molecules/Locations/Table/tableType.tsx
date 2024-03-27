export interface itemType {
  id: string
  title: string
  subtitle: string
  direction: string
}

export interface tableType {
  totalColumns?: number
  width?: string
  handleChange?: (values: any[]) => void
  locations?: any[]
}

export interface useTableType {
  handleChange?: (values: any[]) => void
  locations?: any[]
}
