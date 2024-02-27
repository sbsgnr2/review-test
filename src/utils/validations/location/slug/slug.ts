import { slugSchema } from '../../slugSchema'

export function validateLocationSlug(value: string) {
  try {
    slugSchema.parse({ slug: value })
    // verificar que no exista
    return null
  } catch (error: any) {
    return 'The Slug field is required and must contain letters, numbers and half dashes, without spaces'
  }
}
