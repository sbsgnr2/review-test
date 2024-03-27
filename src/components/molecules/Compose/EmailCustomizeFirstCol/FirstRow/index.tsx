import { DDL } from '@/components/molecules/DDL'
import styles from './FirstRow.module.css'
import { optionsMicrosurvey, optionsTemplate } from '@/mocks/composeForm'
import { EmailFeedbackRequest } from '../EmailFeedbackRequest'
import { EmailReviewRequest } from '../EmailReviewRequest'
import { useCampaigns } from '@/zustand/compose'

export function FirstRow() {
  const { handleTemplate, template, handleMicrosurvey } = useCampaigns()
  return (
    <>
      <p className={styles.title}>Campaign Details</p>
      <DDL
        required={false}
        options={optionsTemplate}
        handleChange={handleTemplate}
        label='Template'
        width='100%'
        height='1.9rem'
        backgroundList='var(--main-bg-color)'
        color='var(--primary-color)'
        fontWeight='700'
        fontSize='0.65rem'
        value={'1'}
      />
      <DDL
        required={false}
        options={optionsMicrosurvey}
        handleChange={handleMicrosurvey}
        label='Microsurvey'
        width='100%'
        height='1.9rem'
        backgroundList='var(--main-bg-color)'
        color='var(--primary-color)'
        fontWeight='700'
        fontSize='0.65rem'
        value={'1'}
      />
      {template === '1' ? <EmailFeedbackRequest /> : <EmailReviewRequest />}
    </>
  )
}
