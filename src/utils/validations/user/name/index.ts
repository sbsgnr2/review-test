import { nameWithLettersSchema } from "../../nameWithLettersSchema"

export function validateUserName(value: string) {
  try {
    nameWithLettersSchema.parse({ name: value })
    // verificar que no exista
    return null
  } catch (error: any) {
    return 'The User Name field is required'
  }
}
