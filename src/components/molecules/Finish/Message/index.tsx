import styles from './Message.module.css'

export function Message() {
  return (
    <div className={styles.content}>
      <p className={styles.title}>Send Welcome Email.</p>
      <p className={styles.description}>
        This user will be receiving their email alerts immediately.
      </p>
    </div>
  )
}
