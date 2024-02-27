import styles from './Review.module.css'
import { Card } from '@/components/molecules/Card'
import { CardHeader } from '@/components/molecules/CardHeader'
import { ReviewUserHeader } from '@/components/molecules/Review/ReviewUserHeader'
import { GoogleIcon } from '@/components/atoms/Icons/GoogleIcon'
import { CardContent } from '@/components/molecules/CardContent'
import { reviewType } from './ReviewType'
import Accordion from '@/components/atoms/Accordion'
import { useHandleOpen } from '@/hooks/useHandleOpen'

export default function Review({
  stars,
  name,
  timeAbr,
  review,
  suggestedReply,
  provider,
}: reviewType) {
  const { isOpen, handleToggle } = useHandleOpen({})

  return (
    <Card>
      <CardHeader>
        <ReviewUserHeader
          image={'/images/unnamed.png'}
          stars={stars}
          primaryText={name}
          secondaryText={timeAbr}
        />
        {provider === 'google' && (
          <div className={styles.providerIcon}>
            <GoogleIcon height='2.5rem' width='2.5rem' />
          </div>
        )}
      </CardHeader>
      <CardContent>
        {review}
        <Accordion
          className={styles.accordion}
          isOpen={isOpen}
          onChangeOpen={handleToggle}
          header={<>Suggested replies</>}
        >
          <div className={styles.suggestedReply}>{suggestedReply}</div>
        </Accordion>
      </CardContent>
    </Card>
  )
}
