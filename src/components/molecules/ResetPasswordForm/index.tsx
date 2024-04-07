import { TextBox } from '../Form/TextBox'
import { BaseForm } from '../Form/BaseForm'
import { validatePassword } from '@/utils/validations/password'
import { useResetPasswordForm } from './useResetPasswordForm'
import { Toast } from '../Toast'

export function ResetPasswordForm() {
  const { validateRepeatPassword, removeMessages, handleSubmit, messages, resetSignal } = useResetPasswordForm()

  return (
    <BaseForm submitTitle='Update' handleSubmit={handleSubmit} horizontalJustify='flex-start'>
      <Toast messages={messages} removeMessages={removeMessages} />
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
        resetSignal={resetSignal}
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
        resetSignal={resetSignal}
        validationFunction={validateRepeatPassword}
      />
    </BaseForm>
  )
}
