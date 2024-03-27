import styles from './Locations.module.css'
import { Button } from '@/components/molecules/Form/Button'
import Table from './Table'
import { useLocation } from './useLocations'

export default function Location() {
  const { redirection } = useLocation()
  return (
    <>
      <p className={styles.description}>Select the locations your user will have access to</p>
      <Table />
      <Button
        width='max-content'
        variant='contained'
        type='submit'
        height='1.8rem'
        fontSize='0.8rem'
        onClick={redirection}
        ariaLabel='next'
      >
        Next
      </Button>
    </>
  )
}
