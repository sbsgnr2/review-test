import * as z from 'zod'

const optionalNameValidator = z
  .string({ invalid_type_error: 'The Name field is required' })
  .regex(/^(?:[a-zA-Z,.]+)?$/, { message: 'The name must contain only letters' })
  .nullable()

const optionalSurnameValidator = z
  .string({ invalid_type_error: 'The Last Name field is required' })
  .regex(/^(?:[a-zA-Z,.]+)?$/, { message: 'The Last Name must contain only letters' })
  .nullable()

export const userThirdStepSchema = z.object({
  name: optionalNameValidator.optional(),
  surname: optionalSurnameValidator.optional(),
  email: z
    .string({ invalid_type_error: 'The Email field is required' })
    .email('The Email field is invalid')
    .nonempty('The Email field is required'),
  userType: z.number({ invalid_type_error: 'The User Type field is required' }).int().positive(),
  locations: z.array(z.union([z.string().regex(/^\d+$/), z.number()])),
})

function getThirdErrorMessages(error: z.ZodError<any>) {
  const firstErrors: { [key: string]: string } = {}
  error.errors.forEach((err) => {
    const key = err.path.join('.')
    if (!(key in firstErrors)) {
      firstErrors[key] = err.message
    }
  })
  return firstErrors
}

export function validateThirdStep({
  name,
  surname,
  email,
  userType,
  locations,
}: {
  name: string
  surname: string
  email: string
  userType: number | null
  locations: number[]
}) {
  try {
    userThirdStepSchema.parse({ name, surname, email, userType, locations })
    return true
  } catch (error: any) {
    const errors = getThirdErrorMessages(error)
    return Object.keys(errors)?.map((key: any) => `${key}: ${errors[key]}`)
  }
}
