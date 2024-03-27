import { Button } from '@/components/molecules/Form/Button'
import styles from './Step2.module.css'

export function Step2() {
  return (
    <div className={styles.step}>
      <p className={styles.stepTitle}>Step 2:</p>
      <Button
        type='button'
        height='4rem'
        backgroundColor='var(--light-color)'
        ariaLabel='CSV Upload'
      >
        Upload CSV File
      </Button>
      <div className={styles.buttonDesc}>
        <Button
          variant='text'
          padding='0'
          width='max-content'
          height='max-content'
          ariaLabel='Enable SMS'
          type='button'
        >
          <p>
            <span className={styles.enableSMSText}>Enable SMS</span>{' '}
          </p>
        </Button>
        <span className={styles.blackWord}>to upload a CSV of recipients</span>
      </div>
    </div>
  )
}
