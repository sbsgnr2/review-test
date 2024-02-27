import styles from './Body.module.css'
import { Header } from '../Header'
import { LoginForm } from '../LoginForm'
import { RecoveryForm } from '../RecoveryForm'
import { useBodyForm } from './useBodyForm'
import { BackButtonContainer } from '../BackButtonContainer'

export function Body() {
  const { isLoginForm, handleForm } = useBodyForm()

  return (
    <div className={styles.body_content}>
      <BackButtonContainer handleForm={handleForm} isLoginForm={isLoginForm} />
      <Header title={isLoginForm ? 'Login' : 'Recovery Password'} />
      {isLoginForm ? <LoginForm handleForm={handleForm} /> : <RecoveryForm />}
    </div>
  )
}
