import styles from './ButtonContainer.module.css'
import { ButtonContainerType } from './ButtonContainerType'

export function ButtonContainer({ handleIncrement, handleDecrement }: ButtonContainerType) {
  return (
    <div className={styles.buttonsContainer}>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}
