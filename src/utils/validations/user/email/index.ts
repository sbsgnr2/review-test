import { validateEmailAddress } from "@/services/api/users/validateEmailAddress"
import { validateEmail } from "../../email"

export async function validateUserEmail(value: string) {
  const isValid = validateEmail(value)
  if (isValid) {
    const exist = await validateEmailAddress({ email: value })
    if (exist?.data?.isValid) {
      return 'The email address is already in use'
    }
  }

  if (!isValid) {
    return 'Enter a valid email address'
  }
  return ''
}
