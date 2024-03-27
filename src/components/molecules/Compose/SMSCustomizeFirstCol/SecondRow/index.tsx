import { TextBox } from '@/components/molecules/Form/TextBox'
import styles from './SecondRow.module.css'

export function SecondRow() {
  return (
    <>
      <p className={styles.title}>Sender Details</p>
      <TextBox
        label='Sender Name'
        name='senederName'
        required={false}
        variant='border_focused_outlined'
        withErrorPadding={false}
        placeholder='Sender Name'
        type='text'
        height='1.9rem'
        width='100%'
        maxWidth='30rem'
        fontWeight={'600'}
        inputFontSize={'0.75rem'}
        validationFunction={() => null}
        labelColor='var(--primary-color)'
      />
      <TextBox
        label='Sender Email'
        name='senderEmail'
        required={false}
        variant='border_focused_outlined'
        withErrorPadding={false}
        placeholder='Sender Email'
        type='text'
        height='1.9rem'
        width='100%'
        maxWidth='30rem'
        fontWeight={'600'}
        inputFontSize={'0.75rem'}
        validationFunction={() => null}
        labelColor='var(--primary-color)'
      />
      <TextBox
        label='Reply to Email'
        name='replyToEmail'
        required={false}
        variant='border_focused_outlined'
        withErrorPadding={false}
        placeholder='Reply-to Email'
        type='text'
        height='1.9rem'
        width='100%'
        maxWidth='30rem'
        fontWeight={'600'}
        inputFontSize={'0.75rem'}
        validationFunction={() => null}
        labelColor='var(--primary-color)'
      />
      <TextBox
        label='Subject Line'
        name='subjectLine'
        required={false}
        variant='border_focused_outlined'
        withErrorPadding={false}
        placeholder='Subject Line'
        type='text'
        height='1.9rem'
        width='100%'
        maxWidth='30rem'
        fontWeight={'600'}
        inputFontSize={'0.75rem'}
        validationFunction={() => null}
        labelColor='var(--primary-color)'
      />
    </>
  )
}
