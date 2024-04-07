import * as z from 'zod'

export const createCompanySchema = z.object({
  name: z
    .string({ invalid_type_error: 'The company name is required' })
    .nonempty({ message: 'The company name is required' })
    .refine((value) => value.trim() !== '', {
      message: 'The Name field is required',
    }),
  slug: z
    .string({ invalid_type_error: 'The company slug is required' })
    .regex(/^[a-zA-Z0-9-]+$/, {
      message: 'The slug must contain letters, numbers and half dashes, without spaces',
    })
    .nonempty({ message: 'The company slug is required' }),
  description: z.string().nullable(),
  smsMonthlyLimit: z
    .number({ invalid_type_error: 'The monthly limit is required' })
    .int({ message: 'The monthly limit is required' })
    .nonnegative({ message: 'The monthly limit must be a non-negative integer' })
    .refine((value) => value >= 0, {
      message: 'The monthly limit must be a non-negative integer',
    }),
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

export function validateCreateCompany({
  name,
  slug,
  description,
  smsMonthlyLimit,
  tags,
}: {
  name: string
  slug: string
  description: string
  smsMonthlyLimit: number
  tags: string[]
}) {
  try {
    createCompanySchema.parse({ name, slug, description, smsMonthlyLimit, tags })
    return true
  } catch (error: any) {
    const errors = getFirstErrorMessages(error)
    return Object.keys(errors)?.map((key: any) => `${key}: ${errors[key]}`)
  }
}
