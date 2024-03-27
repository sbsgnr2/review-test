import styles from './AllowSmsRec.module.css'

export function AllowSmsRec() {
  return (
    <>
      <div className={styles.myMessage}>
        On scale of 0 to 10. How likely are you to recommend Clutch Automotive
      </div>
      <div className={styles.otherMessage}>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
      </div>
      <div className={styles.myMessage}>Would you like to leave additional feedback</div>
      <div className={styles.otherMessage}>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
      </div>
      <div className={styles.myMessage}>Thanks! We appreciate your feedback.</div>
    </>
  )
}
