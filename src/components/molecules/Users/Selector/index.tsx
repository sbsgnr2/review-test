import { Button } from '../../Form/Button'
import styles from './Selector.module.css'
import { selectorType } from './selectorType'

export function Selector({ isOpen, handleOpen, handleClose }: selectorType) {
  return (
    <div className={styles.selection}>
      <Button
        height='1.7rem'
        fontSize='0.8rem'
        withBorderRadius={false}
        variant={isOpen ? 'contained' : 'outlined'}
        onClick={() => handleOpen()}
      >
        Profile
      </Button>
      <Button
        height='1.7rem'
        fontSize='0.8rem'
        withBorderRadius={false}
        variant={!isOpen ? 'contained' : 'outlined'}
        onClick={() => handleClose()}
      >
        Activity
      </Button>
    </div>
  )
}
