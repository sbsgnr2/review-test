import * as z from 'zod'

export const createLocationSchema = z.object({
  name: z
    .string()
    .nonempty()
    .refine((value) => value.trim() !== '', {
      message: 'The Name field is required',
    }),
  slug: z
    .string()
    .regex(/^[a-zA-Z0-9-]+$/)
    .nonempty()
    .refine((value) => value.trim() !== '', {
      message: 'The slug must contain letters, numbers and half dashes, without spaces',
    }),
  company: z
    .number()
    .int()
    .nonnegative()
    .refine((value) => value >= 1, {
      message: 'The company must be a non-negative integer',
    }),
  tags: z.array(z.string()).optional(),
})

export function validateCreateLocation({
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
    createLocationSchema.parse({ name, slug, description, smsMonthlyLimit, tags })
    return true
  } catch (error: any) {
    return error.errors || 'Unknown error'
  }
}
