import * as z from 'zod'

export const nameSchema = z.object({
  name: z.string().nonempty('This field is required'),
})
