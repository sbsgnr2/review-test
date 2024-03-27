import { TextEditor } from '@/components/molecules/TextEditor'
import styles from './EmailFeedbackRequest.module.css'
import { useCampaigns } from '@/zustand/compose'

export function EmailFeedbackRequest() {
  const { handleTopMessage, handleBottomMessage } = useCampaigns()
  return (
    <>
      <p className={styles.secondaryTitle}>TOP MESSAGE</p>
      <TextEditor handleMessage={handleTopMessage} />
      <p className={styles.secondaryTitle}>BOTTOM MESSAGE</p>
      <TextEditor handleMessage={handleBottomMessage} />
    </>
  )
}
