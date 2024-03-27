import { MiddleLine } from '@/components/atoms/MiddleLine'
import styles from './EmailFirstCol.module.css'
import { FirstRow } from './FirstRow'
import { SecondRow } from './SecondRow'

export function EmailFirstCol() {
  return (
    <div className={styles.bodyBoxes}>
      <FirstRow />
      <MiddleLine word='OR' />
      <SecondRow />
    </div>
  )
}
