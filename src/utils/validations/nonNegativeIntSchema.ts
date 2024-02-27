import * as z from 'zod'

export const nonNegativeIntSchema = z.object({
  monthLimit: z
    .number()
    .int()
    .nonnegative()
    .refine((value) => value >= 0, {
      message: 'This field must be a non-negative integer',
    }),
})
