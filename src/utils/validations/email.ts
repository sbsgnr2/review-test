import { z } from 'zod'

const emailSchema = z.string().email()

export const validateEmail = (value: string) => {
  try {
    emailSchema.parse(value)
    return true
  } catch (error) {
    return false
  }
}
