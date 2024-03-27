import { TextEditor } from '@/components/molecules/TextEditor'
import styles from './EmailReviewRequest.module.css'
import { useCampaigns } from '@/zustand/compose'

export function EmailReviewRequest() {
  const { handleTopMessage } = useCampaigns()

  return (
    <>
      <p className={styles.secondaryTitle}>MESSAGE</p>
      <div className={styles.editorContent}>
        <TextEditor handleMessage={handleTopMessage} />
      </div>
    </>
  )
}
