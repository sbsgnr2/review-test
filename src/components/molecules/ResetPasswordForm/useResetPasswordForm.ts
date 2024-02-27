import { validatePasswords } from "@/utils/validations/password"

export function useResetPasswordForm () {
  function validateRepeatPassword(repeatPassword: string) {
    const inputElement = document.getElementsByName('password')[0] as HTMLInputElement
    const password = inputElement.value
    const error = validatePasswords({ password, repeatPassword })
    return error
  }

  return { validateRepeatPassword }
}