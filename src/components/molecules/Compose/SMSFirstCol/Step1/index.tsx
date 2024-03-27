import { Button } from '@/components/molecules/Form/Button'
import styles from './Step1.module.css'

export function Step1() {
  return (
    <div className={styles.step}>
      <p className={styles.stepTitle}>Step 1:</p>
      <Button
        variant='text'
        padding='0'
        width='max-content'
        height='max-content'
        ariaLabel='CSV Download'
        type='button'
      >
        <p className={styles.downloadText}>Download CSV Template</p>
      </Button>
      <p className={styles.subtitle}>
        Download a CSV file that includes your custom attributes. Simple past in your fields and
        then upload the file
      </p>
    </div>
  )
}
