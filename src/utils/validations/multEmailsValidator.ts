import { validateEmail } from "./email"

export function multEmailValidator({ emails }: { emails: string }): string {
  if (emails.length === 0) {
    return 'Debe ingresar al menos un correo electrónico'
  }
  const emailList = emails.split(',').map((email) => email.trim())
  let error: string = ''
  for (let i = 0; i < emailList.length; i++) {
    const isValid = validateEmail(emailList[i])
    if (!isValid) {
      error = 'Ingrese correos electrónicos válidos'
      break
    }
  }
  return error
}