import { ArrowLeftCircleIcon } from '@/components/atoms/Icons/ArrowLeftCircleIcon'
import { IconButton } from '../../Form/Button/IconButton'
import styles from './BackButtonContainer.module.css'
import { backButtonContainerType } from './backButtonContainerType'

export function BackButtonContainer({ handleForm, isLoginForm }: backButtonContainerType) {
  return (
    <>
      {!isLoginForm && (
        <div className={styles.icon_button_container}>
          <IconButton width='2rem' height='2rem' type='button' onClick={handleForm}>
            <ArrowLeftCircleIcon width='2rem' height='2rem' />
          </IconButton>
        </div>
      )}
    </>
  )
}
