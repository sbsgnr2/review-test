import { Button } from '../Form/Button'
import styles from './Selector.module.css'
import { selectorType } from './selectorType'

export function Selector({
  isOpen,
  handleOpen,
  handleClose,
  firstOptionText,
  secondOptionText,
}: selectorType) {
  return (
    <div className={styles.selection}>
      <Button
        height='1.7rem'
        fontSize='0.8rem'
        withBorderRadius={false}
        variant={isOpen ? 'contained' : 'outlined'}
        onClick={() => handleOpen()}
        ariaLabel={firstOptionText}
      >
        {firstOptionText}
      </Button>
      <Button
        height='1.7rem'
        fontSize='0.8rem'
        withBorderRadius={false}
        variant={!isOpen ? 'contained' : 'outlined'}
        onClick={() => handleClose()}
        ariaLabel={secondOptionText}
      >
        {secondOptionText}
      </Button>
    </div>
  )
}
