import { StarRating } from '../../StarRating'
import styles from './StarRow.module.css'

export function StarRow({ rating }: { rating: number }) {
  return (
    <div className={styles.starContainer}>
      {rating} <StarRating rating={rating} />
    </div>
  )
}
