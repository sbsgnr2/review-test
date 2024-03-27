import { useCampaigns } from '@/zustand/compose'
import styles from './PreviewBox.module.css'
import React from 'react'
import { DotsSMS } from '@/components/atoms/Compose/DotsSMS'
import { AllowSmsRec } from '@/components/atoms/Compose/AllowSmsRec'

export function PreviewSMSBox() {
  const { message, isAllowSmsRec } = useCampaigns()
  return (
    <div className={styles.previewBox}>
      <div className={styles.secondColumnFixed}>
        <div className={styles.content}>
          <div className={styles.cellphone}>
            <div className={styles.cellphoneInt}>
              {message && (
                <>
                  <div className={styles.myMessage}>{message}</div>
                  <DotsSMS />
                  {isAllowSmsRec && <AllowSmsRec />}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
