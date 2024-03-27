import * as z from 'zod'

export const nonNegativeIntSchema = z.object({
  smsMonthlyLimit: z
    .number()
    .int()
    .nonnegative()
    .refine((value) => value >= 0, {
      message: 'This field must be a non-negative integer',
    }),
})
