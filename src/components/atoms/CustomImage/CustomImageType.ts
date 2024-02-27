export interface CustomImageType {
  width?: string
  height?: string
  imgUrl?: string
  optimized? : boolean
  alt?: string
  type?: 'profile' | 'standard'
  objectFit?: 'cover' | 'contain'
}
