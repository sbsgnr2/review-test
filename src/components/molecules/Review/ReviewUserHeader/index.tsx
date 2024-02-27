import { CustomImage } from '@/components/atoms/CustomImage'
import styles from './ReviewUserHeader.module.css'
import { Rating } from '@/components/atoms/Rating'
import { StarIcon } from '@/components/atoms/Icons/StarIcon'
import { reviewUserHeaderType } from './reviewUserHeaderType'

export function ReviewUserHeader({
  stars,
  primaryText,
  secondaryText,
  image,
}: reviewUserHeaderType) {
  return (
    <div className={styles.reviewUserHeader}>
      <div className={styles.userIcon}>
        <CustomImage width='2.5rem' height='2.5rem' imgUrl={image} />
      </div>
      <div>
        <Rating
          stars={stars}
          icon={<StarIcon variant='filled' fill='#fdd41d' width='0.9rem' height='0.9rem' />}
        />
        <span className={styles.primaryText}>{primaryText}</span>
        <span className={styles.secondaryText}>{secondaryText}</span>
      </div>
    </div>
  )
}
