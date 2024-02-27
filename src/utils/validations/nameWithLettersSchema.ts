import * as z from 'zod'

export const nameWithLettersSchema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z,. ]+$/)
    .nonempty('This field is required')
    .refine((value) => value.trim() !== '', {
      message: 'This field must only contain letters',
    }),
})
