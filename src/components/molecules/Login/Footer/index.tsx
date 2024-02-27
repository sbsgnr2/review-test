import { Button } from '../../Form/Button'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>{`Don't have an account?`}</p>
      <Button variant='text' width='max-content' fontSize='0.8rem'>
        Contact us
      </Button>
    </div>
  )
}
