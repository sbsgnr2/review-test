import { cardType } from '@/components/molecules/Card/CardType'
import styles from './Card.module.css'

export function Card({
  children,
  width = '100%',
}: cardType) {
  return (
    <div className={styles.card} style={{
      width: width
    }}>
      {children}
    </div>
  )
}
