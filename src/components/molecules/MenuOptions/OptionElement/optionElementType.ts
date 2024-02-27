import { ReactNode } from 'react'

export interface optionElementType {
  icon: ReactNode
  title: string
  urlLink: string
  fontSize?: string
  hoverColor?: string
  selected?: string
  handleSelected?: any
  isOpen?: boolean
}
