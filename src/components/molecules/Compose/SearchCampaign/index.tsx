import { Button } from '../../Form/Button'
import { SearchSelect } from '../../Form/SearchSelect'
import styles from './SearchCampaign.module.css'

export function SearchCampaign() {
  return (
    <div className={styles.searchCampaign}>
      <SearchSelect name='searchCampaign' placeholder='Campaign Name' />
      <Button
        width='8rem'
        variant='outlined'
        type='button'
        onClick={() => {}}
        height='1.9rem'
        fontSize='0.8rem'
        ariaLabel='Send test'
        backgroundColor='var(--main-bg-color)'
      >
        Send Test
      </Button>
      <Button
        width='10rem'
        variant='contained'
        type='button'
        onClick={() => {}}
        height='1.9rem'
        fontSize='0.8rem'
        ariaLabel='Send test'
        backgroundColor='var(--main-bg-color)'
      >
        Send Campaign
      </Button>
    </div>
  )
}
