import { nameSchema } from "../../nameSchema"

export function validateCompanyName(value: string) {
  try {
    nameSchema.parse({ name: value })
    // verificar que no exista
    return null
  } catch (error: any) {
    return 'The Company Name field is required'
  }
}
