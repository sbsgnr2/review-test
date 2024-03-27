import { NumberBox } from '../../Form/NumberBox'
import styles from './ReminderDataNumbers.module.css'

export function ReminderDataNumbers() {
  return (
    <div className={styles.remindersDataNumbers}>
      <div className={styles.numberCont}>
        <p>After</p>
        <NumberBox
          label=''
          name='reminderMsg'
          changeValue={() => {}}
          maxWidth='4rem'
          validationFunction={undefined}
          resetSignal={undefined}
          required={false}
        />
        <p>Days</p>
      </div>
      <span className={styles.separator}></span>
      <div className={styles.numberCont}>
        <p>Number</p>
        <NumberBox
          label=''
          value={1}
          name='remindersNumber'
          changeValue={() => {}}
          maxWidth='4rem'
          validationFunction={undefined}
          resetSignal={undefined}
          required={false}
        />
        <p>Reminders</p>
      </div>
    </div>
  )
}
