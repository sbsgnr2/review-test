import { useCampaigns } from '@/zustand/compose'
import styles from './EmailData.module.css'

export function EmailData() {
  const { name, email, emailTo, subject } = useCampaigns()

  return (
    <div className={styles.emailData}>
      <div>
        <p className={styles.title}>FROM</p>
        <p className={styles.subtitle}>
          {name || ''} {`<${email}>`}
        </p>
      </div>
      <div>
        <p className={styles.title}>REPLY-TO EMAIL</p>
        <p className={styles.subtitle}>{emailTo || ''}</p>
      </div>
      <div>
        <p className={styles.title}>SUBJECT</p>
        <p className={styles.subtitle}>{subject}</p>
      </div>
    </div>
  )
}
