import styles from './Locations.module.css'
import { Button } from '@/components/molecules/Form/Button'
import Table from './Table'
import { useLocation } from './useLocations'
import { Toast } from '../Toast'

export default function Location({ handleStep }: { handleStep: (num: number) => void }) {
  const { handleChange, handleSubmit, handleBack, user, messages, removeMessages, loading } =
    useLocation({
      handleStep,
    })

  return (
    <>
      <Toast messages={messages} removeMessages={removeMessages} />
      <p className={styles.description}>Select the locations your user will have access to</p>
      <Table handleChange={handleChange} locations={user?.locations} />
      <div className={styles.buttonContainers}>
        <Button
          width='max-content'
          variant='contained'
          type='submit'
          height='1.8rem'
          fontSize='0.8rem'
          onClick={handleBack}
          ariaLabel='next'
        >
          Back
        </Button>
        <Button
          width='max-content'
          variant='contained'
          type='submit'
          height='1.8rem'
          fontSize='0.8rem'
          onClick={handleSubmit}
          ariaLabel='next'
          loading={loading}
        >
          Next
        </Button>
      </div>
    </>
  )
}
