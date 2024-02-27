import { ReactElement } from "react"

export interface sectionCardItemType {
  title: string
  subtitle: string
  icon: ReactElement
  href: string
}

export interface sectionCardType {
  sectionTitle: string
  items: sectionCardItemType[]
}