import { passwordRegex } from '@/utils/constants'
import * as z from 'zod'

export const registerUserSchema = z
  .object({
    name: z
      .string()
      .regex(/^[a-zA-Z,.]+$/)
      .nonempty('The Name field is required')
      .refine((value) => value.trim() !== '', {
        message: 'The Name field must only contain letters',
      }),
    surname: z
      .string()
      .regex(/^[a-zA-Z,.]+$/)
      .nonempty('The Surname field is required')
      .refine((value) => value.trim() !== '', {
        message: 'The Surname field must only contain letters',
      }),
    password: z
      .string()
      .nonempty('The Password field is required')
      .min(8, { message: 'Password must be at least 8 characters long' })
      .max(30, { message: 'Password must be less than 30 characters long' })
      .regex(
        passwordRegex,
        'The password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
      )
      .refine((value) => value.trim().length > 0, { message: 'The Password field is required' }),
    repeatPassword: z
      .string()
      .nonempty('The Repeat Password field is required')
      .refine((value) => value.trim().length > 0, {
        message: 'The Repeat Password field is required',
      }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords must match',
    path: ['repeatPassword'],
  })

export function validateUserRegister({
  firstName,
  surname,
  password,
  repeatPassword,
}: {
  firstName: string
  surname: string
  password: string
  repeatPassword: string
}) {
  try {
    registerUserSchema.parse({ firstName, surname, password, repeatPassword })
    return true
  } catch (error: any) {
    return error.errors || 'Unknown error'
  }
}
