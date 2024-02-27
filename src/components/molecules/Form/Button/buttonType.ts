import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface buttonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  width?: string
  height?: string
  fontSize?: string
  color?: string
  hoverColor?: string
  variant?: 'text' | 'contained' | 'outlined'
  padding?: string
  withBorderRadius?: boolean
}
