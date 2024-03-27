import styles from './DotsSMS.module.css'

export function DotsSMS() {
  return (
    <div className={styles.otherMessage}>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
    </div>
  )
}
