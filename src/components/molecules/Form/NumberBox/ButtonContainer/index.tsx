import styles from './ButtonContainer.module.css'
import { ButtonContainerType } from './ButtonContainerType'

export function ButtonContainer({ handleIncrement, handleDecrement }: ButtonContainerType) {
  return (
    <div className={styles.buttonsContainer}>
      <button type='button' onClick={handleIncrement} aria-label='increment'>
        +
      </button>
      <button type='button' onClick={handleDecrement} aria-label='decrement'>
        -
      </button>
    </div>
  )
}
