import { nameWithLettersSchema } from "../../nameWithLettersSchema"

export function validateUserSurname(value: string) {
  try {
    nameWithLettersSchema.parse({ name: value })
    // verificar que no exista
    return null
  } catch (error: any) {
    return 'The User Last Name field is required'
  }
}
