import { CustomImage } from '@/components/atoms/CustomImage'
import styles from './UserImage.module.css'

export function UserImage({ user, isOpen }: { user: any; isOpen: boolean }) {
  return (
    <div className={`${isOpen ? styles.imageContain : styles.isClose}`}>
      {user?.image ? (
        <div className={styles.image_container}>
          <CustomImage imgUrl={user?.image} width='2.2rem' height='2.2rem' optimized />
        </div>
      ) : (
        <div className={styles.logoName}>
          {user?.firstName[0]?.toUpperCase()}
          {user?.lastName[0]?.toUpperCase()}
        </div>
      )}
    </div>
  )
}
