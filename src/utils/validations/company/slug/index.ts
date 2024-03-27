import { validateSlug } from '@/services/api/companies/validateSlug'
import { slugSchema } from '../../slugSchema'

export async function validateCompanySlug(slug: string) {
  try {
    slugSchema.parse({ slug })
    await validateSlug({ slug })
    return null
  } catch (error: any) {
    if (error.response?.data?.code === 'SlugAlreadyRegistered'){
      return `${slug} slug already registered`
    }
    return 'The Slug field is required and must contain letters, numbers and half dashes, without spaces'
  }
}
