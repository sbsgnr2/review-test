import { BaseForm } from '../../Form/BaseForm'
import { useLoginForm } from './useLoginForm'
import { loginFormType } from './loginFormType'
import { InputsContainer } from './InputsContainer'
import { ForgotButton } from './ForgotButton'

export function LoginForm({ handleForm }: loginFormType) {
  const { onSubmit, error, loading } = useLoginForm()

  return (
    <BaseForm submitTitle='Log in' handleSubmit={onSubmit} loading={loading} error={error}>
      <InputsContainer />
      <ForgotButton handleForm={handleForm} />
    </BaseForm>
  )
}
