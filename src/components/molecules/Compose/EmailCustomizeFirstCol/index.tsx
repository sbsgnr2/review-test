import styles from './EmailCustomizeFirstCol.module.css'
import { MiddleLine } from '@/components/atoms/MiddleLine'
import { FirstRow } from './FirstRow'
import { SecondRow } from './SecondRow'
import { ThirdRow } from './ThirdRow'

export function EmailCustomizeFirstCol() {
  return (
    <div className={styles.bodyBoxes}>
      <FirstRow />
      <MiddleLine />
      <SecondRow />
      <MiddleLine />
      <ThirdRow />
    </div>
  )
}
