import * as z from 'zod'

export const createCompanySchema = z.object({
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
  description: z.string().nullable(),
  monthLimit: z
    .number()
    .int()
    .nonnegative()
    .refine((value) => value >= 0, {
      message: 'The monthly limit must be a non-negative integer',
    }),
  tags: z.array(z.string()).optional(),
})

export function validateCreateCompany({
  name,
  slug,
  description,
  monthLimit,
  tags,
}: {
  name: string
  slug: string
  description: string
  monthLimit: number
  tags: string[]
}) {
  try {
    createCompanySchema.parse({ name, slug, description, monthLimit, tags })
    return true
  } catch (error: any) {
    return error.errors || 'Unknown error'
  }
}
