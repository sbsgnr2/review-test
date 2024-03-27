import styles from './UserInfo.module.css'

export function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <p className={styles.name}>Maria Figueredo</p>
      <p className={styles.email}>mariafigueredo@gmail.com</p>
    </div>
  )
}
