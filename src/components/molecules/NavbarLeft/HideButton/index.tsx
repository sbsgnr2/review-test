import styles from './HideButton.module.css'
import { IconButton } from '@/components/molecules/Form/Button/IconButton'
import { LogOutIcon } from '@/components/atoms/Icons/LogoutIcon'
import { hiddenButtonType } from './hiddenButtonType'

export function HiddenButton({ handleToggle, isOpen }: hiddenButtonType) {
  return (
    <div className={styles.hideButton}>
      <IconButton onClick={handleToggle} width={'100%'}>
        <div className={`${isOpen ? styles.buttonContent : styles.noView}`}>
          <LogOutIcon />
          <p>Hide Menu</p>
        </div>
        <span className={`${!isOpen ? styles.altLogOut : styles.noViewAltLog}`}>
          <LogOutIcon width='1.2rem' height='1.2rem' />
        </span>
      </IconButton>
    </div>
  )
}
