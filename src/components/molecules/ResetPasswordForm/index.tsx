import { TextBox } from '../Form/TextBox'
import { BaseForm } from '../Form/BaseForm'
import { validatePassword } from '@/utils/validations/password'
import { useResetPasswordForm } from './useResetPasswordForm'

export function ResetPasswordForm() {
  const { validateRepeatPassword } = useResetPasswordForm()
  return (
    <BaseForm submitTitle='Update' handleSubmit={() => {}} horizontalJustify='flex-start'>
      <TextBox
        label='New Password'
        name='password'
        required={true}
        variant='border_focused_outlined'
        withErrorPadding={false}
        placeholder='Enter Your New Password'
        width='100%'
        maxWidth='30rem'
        height='1.9rem'
        type='text'
        fontWeight={'500'}
        inputFontSize={'0.75rem'}
        validationFunction={validatePassword}
      />
      <TextBox
        label='Confirm New Password'
        name='repeatPassword'
        required={true}
        variant='border_focused_outlined'
        withErrorPadding={false}
        placeholder='Enter Your New Password'
        width='100%'
        maxWidth='30rem'
        height='1.9rem'
        type='text'
        fontWeight={'500'}
        inputFontSize={'0.75rem'}
        validationFunction={validateRepeatPassword}
      />
    </BaseForm>
  )
}
