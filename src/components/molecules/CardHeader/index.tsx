import { cardHeaderType } from '@/components/molecules/CardHeader/cardHeaderType'
import styles from './CardHeader.module.css'

export function CardHeader({
  children,
  justifyContent = "space-between"
}: cardHeaderType) {
  return (
    <div className={styles.cardHeader} style={{
      justifyContent: justifyContent
    }} >
      {children}
    </div>
  )
}
