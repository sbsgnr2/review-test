import styles from './MiddleLine.module.css'
import { MiddleLineType } from './MiddleLineType'

export function MiddleLine({ word }: MiddleLineType) {
  return (
    <div className={styles.horizontalLine}>
      <span className={styles.line}></span>
      {word && <span className={styles.text}>{word}</span>}
      <span className={styles.line}></span>
    </div>
  )
}
