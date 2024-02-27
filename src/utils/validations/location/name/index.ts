import { nameSchema } from "../../nameSchema"

export function validateLocationName(value: string) {
  try {
    nameSchema.parse({ name: value })
    // verificar que no exista
    return null
  } catch (error: any) {
    return 'The Name field is required'
  }
}
