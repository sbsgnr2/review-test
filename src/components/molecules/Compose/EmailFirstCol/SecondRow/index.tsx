import { Button } from '@/components/molecules/Form/Button'
import styles from './SecondRow.module.css'

export function SecondRow() {
  return (
    <>
      <div>
        <p className={styles.title}>Upload Recipients</p>
        <p className={styles.subtitle}>Upload a CSV of Recipients</p>
      </div>
      <div className={styles.step}>
        <p className={styles.stepTitle}>Step 1:</p>
        <Button
          type='button'
          variant='text'
          padding='0'
          width='max-content'
          height='max-content'
          ariaLabel='CSV Download'
        >
          <p className={styles.downloadText}>Download CSV Template</p>
        </Button>
        <p className={styles.subtitle}>
          Download a CSV file that includes your custom attributes. Simple past in your fields and
          then upload the file
        </p>
      </div>
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
      </div>
    </>
  )
}
