import { nonNegativeIntSchema } from "../../nonNegativeIntSchema"

export function validateCompanySmsMonthlyLimit(value: string) {
  try {
    nonNegativeIntSchema.parse({ smsMonthlyLimit: parseInt(value) })
    return null
  } catch (error: any) {
    return 'The monthly limit must be a non-negative integer'
  }
}
