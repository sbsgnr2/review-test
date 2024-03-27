export interface multipleTagsType {
  onTagsChange: ({ tags }: { tags: string[] }) => void
  maxWidth?: string
  resetSignal?: boolean
  color?: string
  fontSize?: string,
  fontWeight?: string,
  label?: string
}

export interface useMultipleTagsType { 
  onTagsChange: ({ tags }: { tags: string[] }) => void, 
  resetSignal?: boolean 
}