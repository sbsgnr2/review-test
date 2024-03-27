import { MiddleLine } from '@/components/atoms/MiddleLine'
import styles from './SMSFirstCol.module.css'
import { FirstRow } from './FirstRow'
import { SecondRow } from './SecondRow'

export function SMSFirstCol() {
  return (
    <div className={styles.bodyBoxes}>
      <FirstRow />
      <MiddleLine word='OR' />
      <SecondRow />
    </div>
  )
}
