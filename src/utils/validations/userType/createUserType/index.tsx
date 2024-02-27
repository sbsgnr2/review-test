import * as z from 'zod'

export const registerUserTypeSchema = z.object({
  name: z.string().nonempty('The Name field is required'),
})

export function validateUserTypeRegister({ name }: { name: string }) {
  try {
    registerUserTypeSchema.parse({ name })
    // verificar que no exista
    return true
  } catch (error: any) {
    return error.errors || 'Unknown error'
  }
}
