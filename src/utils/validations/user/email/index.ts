import { validateEmail } from "../../email"

export function validateUserEmail(value: string) {
  const isValid = validateEmail(value)
  // valid async email exist
  if (!isValid) {
    return 'Enter a valid email address'
  }
  return ''
}
