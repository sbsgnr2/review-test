import { registerUserTypeSchema } from "../createUserType"

export function validateUserTypeName(value: string) {
  try {
    registerUserTypeSchema.parse({ value })
    // verificar que no exista
    return null
  } catch (error: any) {
    return 'The Name field is required'
  }
}