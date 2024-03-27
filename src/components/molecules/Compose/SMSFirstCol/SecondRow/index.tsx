import styles from './SecondRow.module.css'
import { Step1 } from '../Step1'
import { Step2 } from '../Step2'

export function SecondRow() {
  return (
    <>
      <div>
        <p className={styles.title}>Upload Recipients</p>
        <p className={styles.subtitle}>Upload a CSV of Recipients</p>
      </div>
      <Step1 />
      <Step2 />
    </>
  )
}
