import * as z from 'zod'

export const slugSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-zA-Z0-9-]+$/)
    .nonempty()
    .refine((value) => value.trim() !== '', {
      message: 'The slug must contain letters, numbers and half dashes, without spaces',
    }),
})
