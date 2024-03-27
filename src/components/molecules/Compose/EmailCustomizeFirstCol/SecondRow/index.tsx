import { TextBox } from '@/components/molecules/Form/TextBox'
import styles from './SecondRow.module.css'
import { useCampaigns } from '@/zustand/compose'

export function SecondRow() {
  const { handleName, handleEmail, handleEmailTo, handleSubject, name, email, emailTo, subject } =
    useCampaigns()

  return (
    <>
      <p className={styles.title}>Sender Details</p>
      <TextBox
        label='Sender Name'
        name='senederName'
        required={false}
        variant='focused_outlined'
        withErrorPadding={false}
        placeholder='Sender Name'
        type='text'
        height='1.9rem'
        width='100%'
        maxWidth='30rem'
        fontSize='0.65rem'
        fontWeight={'700'}
        inputFontSize={'0.75rem'}
        validationFunction={() => null}
        labelColor='var(--primary-color)'
        changeValue={handleName}
        value={name}
      />
      <TextBox
        label='Sender Email'
        name='senderEmail'
        required={false}
        variant='focused_outlined'
        withErrorPadding={false}
        placeholder='Sender Email'
        type='text'
        height='1.9rem'
        width='100%'
        maxWidth='30rem'
        fontSize='0.65rem'
        fontWeight={'700'}
        inputFontSize={'0.75rem'}
        validationFunction={() => null}
        labelColor='var(--primary-color)'
        changeValue={handleEmail}
        value={email}
      />
      <TextBox
        label='Reply to Email'
        name='replyToEmail'
        required={false}
        variant='focused_outlined'
        withErrorPadding={false}
        placeholder='Reply-to Email'
        type='text'
        height='1.9rem'
        width='100%'
        maxWidth='30rem'
        fontWeight={'700'}
        fontSize='0.65rem'
        inputFontSize={'0.75rem'}
        validationFunction={() => null}
        labelColor='var(--primary-color)'
        changeValue={handleEmailTo}
        value={emailTo}
      />
      <TextBox
        label='Subject Line'
        name='subjectLine'
        required={false}
        variant='focused_outlined'
        withErrorPadding={false}
        placeholder='Subject Line'
        type='text'
        height='1.9rem'
        width='100%'
        maxWidth='30rem'
        fontSize='0.65rem'
        fontWeight={'700'}
        inputFontSize={'0.75rem'}
        validationFunction={() => null}
        labelColor='var(--primary-color)'
        changeValue={handleSubject}
        value={subject}
      />
    </>
  )
}
