export interface ImageViewerType {
  selectedImage: string | null
  alt: string
  handleRemoveImage: (event: React.MouseEvent<HTMLButtonElement>) => void
}
