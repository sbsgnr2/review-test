import { TextArea } from '@/components/molecules/Form/TextArea'
import { Locations } from '../../Locations'
import { Button } from '@/components/molecules/Form/Button'
import styles from './FirstRow.module.css'

export function FirstRow() {
  return (
    <>
      <Locations />
      <TextArea
        label='Paste Recipients'
        width='100%'
        variant='rounded_outlined_focus'
        name='recipients'
        backgroundColor='var(--main-bg-color)'
        fontWeight={'600'}
        fontSize='0.8rem'
        inputFontSize={'0.75rem'}
        cols={undefined}
        subtitle='Paste up to 50 phone numbers below (ONE PER LINE)'
      />
      <div className={styles.buttonDesc}>
        <Button
          variant='text'
          padding='0'
          width='max-content'
          height='max-content'
          ariaLabel='SMS Enable'
          type='button'
        >
          <span className={styles.enableSMSText}>Enable SMS</span>{' '}
        </Button>
        <span className={styles.blackWord}>to enter Recipients emails</span>
      </div>
    </>
  )
}
