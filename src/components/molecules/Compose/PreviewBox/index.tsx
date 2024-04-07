import { CustomImage } from '@/components/atoms/CustomImage'
import styles from './PreviewBox.module.css'
import React from 'react'
import { useCampaigns } from '@/zustand/compose'
import { EmailData } from '@/components/atoms/Compose/EmailData'
import { MicroSurvey } from '@/components/atoms/Compose/MicroSurvey'
import { RattingStarsEmail } from '@/components/atoms/Compose/RattingStarsEmail'
import { RenderContent } from '../RenderContent'

export function PreviewBox() {
  const { microSurvey, topMessage, bottomMessage } = useCampaigns()

  return (
    <div className={styles.previewBox}>
      <div className={styles.secondColumnFixed}>
        <div className={styles.content}>
          <div className={styles.emailContent}>
            <EmailData />
            {topMessage && <div>{RenderContent(topMessage)}</div>}
            <CustomImage
              imgUrl={'/images/ClutchLogo.png'}
              type='standard'
              width='100%'
              height='6.2rem'
              objectFit='contain'
              alt={'Clutch Logo'}
            />
            {microSurvey === '1' ? <MicroSurvey /> : <RattingStarsEmail />}
            {bottomMessage && <div>{RenderContent(bottomMessage)}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
