import { nonNegativeIntSchema } from "../../nonNegativeIntSchema"

export function validateCompanyMonthLimit(value: string) {
  try {
    nonNegativeIntSchema.parse({ monthLimit: parseInt(value) })
    // verificar que no exista
    return null
  } catch (error: any) {
    return 'The monthly limit must be a non-negative integer'
  }
}
