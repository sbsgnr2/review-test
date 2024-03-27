import { RadioButtons } from '@/components/molecules/Form/RadioButtons'
import styles from './ThirdRow.module.css'
import { REVIEW_REQUEST_OPTIONS } from '@/utils/constants/campaigns'
import { useState } from 'react'
import { ReminderDataNumbers } from '../../ReminderDataNumbers'
import { ToggleWithTitle } from '@/components/atoms/Compose/ToggleWithTitle'

export function ThirdRow() {
  const DEFAULT_VALUE = 'assignedSource'
  const [reviewRequest, setReviewRequest] = useState<string>('assignedSource')

  function handleReviewRequest(event: any) {
    setReviewRequest(event.target.value)
  }

  return (
    <>
      <p className={styles.title}>Aditional Details</p>
      <ToggleWithTitle title='REVIEW REQUEST' />
      <p className={styles.paragraph}>
        Ask your customers to leave a review after they complete the Microsurvey
      </p>
      <RadioButtons
        name='reviewRequest'
        label=''
        options={REVIEW_REQUEST_OPTIONS}
        onChange={handleReviewRequest}
        defaultValue={DEFAULT_VALUE}
        isHorizontal={false}
      />
      <ToggleWithTitle title='REMINDER MESSAGE' />
      <p className={styles.paragraph}>Send another request to recipients as reminder</p>
      <ReminderDataNumbers />
    </>
  )
}
