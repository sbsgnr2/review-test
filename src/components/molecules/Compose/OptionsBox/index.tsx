import { useCampaigns } from '@/zustand/compose'
import { EmailCustomizeFirstCol } from '../EmailCustomizeFirstCol'
import { EmailFirstCol } from '../EmailFirstCol'
import { SMSCustomizeFirstCol } from '../SMSCustomizeFirstCol'
import { SMSFirstCol } from '../SMSFirstCol'
import { Top } from '../Top'
import styles from './OptionsBox.module.css'
import { optionsBoxType } from './optionsBoxType'

export function OptionsBox({ format }: optionsBoxType) {
  const { isRecipients } = useCampaigns()
  return (
    <div className={styles.optionsBox}>
      <Top />
      {isRecipients && <>{format === 'email' ? <EmailFirstCol /> : <SMSFirstCol />}</>}
      {!isRecipients && (
        <>{format === 'email' ? <EmailCustomizeFirstCol /> : <SMSCustomizeFirstCol />}</>
      )}
    </div>
  )
}
