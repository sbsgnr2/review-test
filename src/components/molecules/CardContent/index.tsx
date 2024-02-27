import styles from './CardContent.module.css'
import { cardContentType } from './CardContentType'

export function CardContent({
  children
}: cardContentType) {
  return (
    <div className={styles.cardContent}>
      {children}
    </div>
  )
}
