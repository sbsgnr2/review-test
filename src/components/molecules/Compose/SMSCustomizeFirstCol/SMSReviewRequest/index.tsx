import styles from './EmailReviewRequest.module.css'
import { TextArea } from '@/components/molecules/Form/TextArea'
import { useCampaigns } from '@/zustand/compose'

export function SMSReviewRequest() {
  const { message, handleMessage } = useCampaigns()
  return (
    <>
      <div className={styles.title}>
        <p className={styles.secondaryTitle}>MESSAGE</p>
        <p className={styles.secondaryTitle}>{message?.length || 0}/160 CHARACTERS</p>
      </div>
      <div className={styles.editorContent}>
        <TextArea
          label=''
          placeholder="Thanks for visiting Clutch Automotive! We'd love your feedback to improve your experience next time"
          width='100%'
          maxWidth='100%'
          variant='border_focused_outlined'
          name='message'
          backgroundColor='var(--main-bg-color)'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
          value={message}
          changeValue={handleMessage}
        />
      </div>
    </>
  )
}
