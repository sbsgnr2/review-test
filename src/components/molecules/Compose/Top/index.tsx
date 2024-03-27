import { useCampaigns } from '@/zustand/compose'
import styles from './Top.module.css'

export function Top() {
  const { isRecipients, handleOption } = useCampaigns()
  return (
    <div className={styles.top}>
      <div
        className={`${styles.topLeft} ${isRecipients ? styles.selected : undefined}`}
        onClick={() => handleOption(true)}
      >
        <p>Recipients</p>
      </div>
      <div
        className={`${styles.topRight} ${!isRecipients ? styles.selected : undefined}`}
        onClick={() => handleOption(false)}
      >
        <p>Customize</p>
      </div>
    </div>
  )
}
