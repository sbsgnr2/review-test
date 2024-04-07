import { Button } from '@/components/molecules/Form/Button'
import styles from './UserInfo.module.css'
import { PowerIcon } from '@/components/atoms/Icons/PowerIcon'
import { userInfoType } from './userInfoType'
import { useUserInfo } from './useUserInfo'
import { UserImage } from './UserImage'

export function UserInfo({ isOpen = true }: userInfoType) {
  const { user, handleLogOut } = useUserInfo()
  return (
    <div className={styles.userInfo} style={{ justifyContent: isOpen ? 'flex-start' : 'center' }}>
      <UserImage user={user} isOpen={isOpen} />
      {isOpen && (
        <p className={`${isOpen ? styles.name : styles.noView}`}>
          {user?.firstName} {user?.lastName}
        </p>
      )}
      <Button
        variant='text'
        width='max-content'
        padding='0'
        fontSize='0.8rem'
        onClick={handleLogOut}
        ariaLabel='log out'
      >
        <p className={`${isOpen ? styles.buttonText : styles.noView}`}>Log Out</p>
        <span className={`${!isOpen ? styles.icon : styles.iconMob}`}>
          <PowerIcon width='1.4rem' height='1.4rem' />
        </span>
      </Button>
    </div>
  )
}
