import { nonNegativeIntSchema } from "../../nonNegativeIntSchema"

export function validateCampaigReminderLimit(value: string) {
  try {
    nonNegativeIntSchema.parse({ smsMonthlyLimit: parseInt(value) })
    return null
  } catch (error: any) {
    return 'The reminders limit must be a non-negative integer'
  }
}
