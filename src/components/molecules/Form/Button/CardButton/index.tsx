import styles from './CardButton.module.css'
import { cardButtonType } from './cardButtonType'
import { useCardButton } from './useCardButton'

export function CardButton({ children, title, subtitle, href }: cardButtonType) {
  const { handleClick } = useCardButton({ href })

  return (
    <button className={styles.item} onClick={handleClick} aria-label='card button'>
      <span className={styles.iconContainer}>{children}</span>
      <div className={styles.itemContainer}>
        <p className={styles.itemTitle}>{title}</p>
        <p className={styles.itemSubtitle}>{subtitle}</p>
      </div>
    </button>
  )
}
