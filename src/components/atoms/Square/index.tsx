import { squareType } from './squareType'
import styles from './Square.module.css'

export function Square({ number }: squareType) {
  return <div className={styles.square}>{number}</div>
}
