import { z } from 'zod'
import { passwordRegex } from '../constants'

const passwordSchema = z
.string()
.min(8)
.max(30)
.regex(
  passwordRegex,
  'The password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
)
.refine((value) => value.trim().length > 0, { message: 'The Password field is required' })

export function validatePassword (password: string) {
  try {
    passwordSchema.parse(password)
    return null
  } catch (error: any) {
    return error.errors[0]?.message || "Unknown error";
  }
}

export function validatePasswords ({password, repeatPassword}:{password: string, repeatPassword: string}) {
  try {
    if (password !== repeatPassword) {
      return 'Passwords must match'
    }
    passwordSchema.parse(password)
    return null
  } catch (error: any) {
    return error.errors[0]?.message || "Unknown error";
  }
}
