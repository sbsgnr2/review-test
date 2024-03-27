import { ReactNode } from 'react'

export interface baseFormType {
  children: ReactNode
  submitTitle: string
  cancelTitle?: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void
  gap?: string
  horizontalJustify?: 'center' | 'flex-start' | 'flex-end'
  loading?: boolean
  error?: null | string
}
