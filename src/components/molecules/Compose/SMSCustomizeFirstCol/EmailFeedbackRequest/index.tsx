import { TextEditor } from '@/components/molecules/TextEditor'
import styles from './EmailFeedbackRequest.module.css'
import { useCampaigns } from '@/zustand/compose'

export function EmailFeedbackRequest() {
  const { handleTopMessage, handleBottomMessage } = useCampaigns()

  return (
    <>
      <p className={styles.secondaryTitle}>TOP MESSAGE</p>
      <div className={styles.editorContent}>
        <TextEditor handleMessage={handleTopMessage} />
      </div>
      <p className={styles.secondaryTitle}>BOTTOM MESSAGE</p>
      <div className={styles.editorContent}>
        <TextEditor handleMessage={handleBottomMessage} />
      </div>
    </>
  )
}
