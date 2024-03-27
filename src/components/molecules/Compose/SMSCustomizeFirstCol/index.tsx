import styles from './EmailCustomizeFirstCol.module.css'
import { MiddleLine } from '@/components/atoms/MiddleLine'
import { FirstRow } from './FirstRow'
import { ThirdRow } from './ThirdRow'

export function SMSCustomizeFirstCol() {
  return (
    <div className={styles.bodyBoxes}>
      <FirstRow />
      <MiddleLine />
      <ThirdRow />
    </div>
  )
}
