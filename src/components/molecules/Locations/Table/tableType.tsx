export interface itemType {
  id: string
  location: string
  address: string
  country: string
  state: string
  city: string
  name: string
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
