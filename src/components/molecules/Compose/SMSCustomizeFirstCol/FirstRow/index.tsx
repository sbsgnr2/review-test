import { DDL } from '@/components/molecules/DDL'
import styles from './FirstRow.module.css'
import { optionsMicrosurvey, optionsSMSTemplate } from '@/mocks/composeForm'
import { SMSReviewRequest } from '../SMSReviewRequest'
import { Toggle } from '@/components/molecules/Form/Toggle'
import { useCampaigns } from '@/zustand/compose'

export function FirstRow() {
  const { handleTemplate, handleMicrosurvey, handleAllowSmsRec, isAllowSmsRec } = useCampaigns()

  return (
    <>
      <p className={styles.title}>Campaign Details</p>
      <DDL
        required={false}
        options={optionsSMSTemplate}
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
      <div className={styles.toggleCont}>
        <Toggle handleChange={handleAllowSmsRec} isActive={isAllowSmsRec} />
        <p>Allow recipients to respond by text message</p>
      </div>
      <SMSReviewRequest />
    </>
  )
}
