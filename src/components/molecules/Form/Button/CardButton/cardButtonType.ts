import { ReactNode } from "react"

export interface cardButtonType {
  children: ReactNode
  title: string
  subtitle: string
  href: string
}

export interface useCardButtonType { href: string }