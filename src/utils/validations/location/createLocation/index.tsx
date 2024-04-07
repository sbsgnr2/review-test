import * as z from 'zod'

export const createLocationSchema = z.object({
  location: z
    .string({ invalid_type_error: 'The Location is required' })
    .nonempty({ message: 'The Location is required' }),
  name: z
    .string({ invalid_type_error: 'The Location name is required' })
    .nonempty({ message: 'The Location name is required' }),
  slug: z.string({ invalid_type_error: 'The Location slug is required' }).regex(/^[a-zA-Z0-9-]+$/, {
    message: 'The slug must contain letters, numbers and half dashes, without spaces',
  }),
  company: z.number({ invalid_type_error: 'The company is required' }),
  tags: z.array(z.string()).optional(),
})

function getFirstErrorMessages(error: z.ZodError<any>) {
  const firstErrors: { [key: string]: string } = {}
  error.errors.forEach((err) => {
    const key = err.path.join('.')
    if (!(key in firstErrors)) {
      firstErrors[key] = err.message
    }
  })
  return firstErrors
}

export function validateCreateLocation({
  name,
  slug,
  company,
  tags,
  location,
}: {
  name: string
  slug: string
  company: number
  tags: string[]
  location: string
}) {
  try {
    createLocationSchema.parse({ name, slug, company, tags, location })
    return true
  } catch (error: any) {
    const errors = getFirstErrorMessages(error)
    return Object.keys(errors)?.map((key: any) => `${key}: ${errors[key]}`)
  }
}
