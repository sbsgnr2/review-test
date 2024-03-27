import { TextEditor } from '@/components/molecules/TextEditor'
import styles from './EmailReviewRequest.module.css'
import { useCampaigns } from '@/zustand/compose'

export function EmailReviewRequest() {
  const { handleBottomMessage } = useCampaigns()

  return (
    <>
      <p className={styles.secondaryTitle}>MESSAGE</p>
      <TextEditor handleMessage={handleBottomMessage} />
    </>
  )
}
