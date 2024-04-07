import styles from './UserInfo.module.css'

export function UserInfo({ user }: any) {
  return (
    <div className={styles.userInfo}>
      <p className={styles.name}>{`${user?.name} ${user?.surname}`}</p>
      <p className={styles.email}>{user?.email}</p>
    </div>
  )
}
