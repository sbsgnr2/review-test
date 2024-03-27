import styles from './Tag.module.css'

export function Tag({ word }: { word: string }) {
  return (
    <div className={styles.tag}>
      <p>{word}</p>
    </div>
  )
}
