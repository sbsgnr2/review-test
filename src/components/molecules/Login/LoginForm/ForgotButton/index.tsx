import styles from './ForgotButton.module.css'
import { Button } from '@/components/molecules/Form/Button'
import { forgotButtonType } from './forgotButtonType'

export function ForgotButton({ handleForm }: forgotButtonType) {
  return (
    <div className={styles.forgot_button}>
      <Button variant='text' width='max-content' fontSize='0.85rem' onClick={handleForm}>
        Forgot your password?
      </Button>
    </div>
  )
}
