import { Button } from '@/components/molecules/Form/Button'
import styles from './UserInfo.module.css'
import { CustomImage } from '@/components/atoms/CustomImage'
import { PowerIcon } from '@/components/atoms/Icons/PowerIcon'
import { userInfoType } from './userInfoType'

export function UserInfo({ imageUrl, name, surname, isOpen = true }: userInfoType) {
  return (
    <div className={styles.userInfo}>
      <div className={`${isOpen ? styles.imageContain : styles.isClose}`}>
        {imageUrl ? (
          <div className={styles.image_container}>
            <CustomImage imgUrl={imageUrl} width='2.2rem' height='2.2rem' optimized />
          </div>
        ) : (
          <div className={styles.logoName}>
            {name[0]}
            {surname[0]}
          </div>
        )}
      </div>
      {isOpen && (
        <p className={`${isOpen ? styles.name : styles.noView}`}>
          {name} {surname}
        </p>
      )}
      <Button variant='text' width='max-content' padding='0' fontSize='0.8rem'>
        <p className={`${isOpen ? styles.buttonText : styles.noView}`}>Log Out</p>
        <span className={`${!isOpen ? styles.icon : styles.iconMob}`}>
          <PowerIcon width='1.4rem' height='1.4rem' />
        </span>
      </Button>
    </div>
  )
}
