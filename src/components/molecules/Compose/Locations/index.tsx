import { Button } from '../../Form/Button'
import Table from '../../Locations/Table'
import { ArrowUpIcon } from '@/components/atoms/Icons/arrow_up_icon'
import { ArrowDownIcon } from '@/components/atoms/Icons/arrow_down_icon'
import styles from './Locations.module.css'
import { useLocations } from './useLocations'
import { useCampaigns } from '@/zustand/compose'

export function Locations({ handleChange }: { handleChange?: (values: any[]) => void }) {
  const { handleViewLocations, viewLocations } = useLocations()
  const { locations } = useCampaigns()

  return (
    <div className={styles.selectLocations}>
      <Button onClick={handleViewLocations} type='button' height='2rem'>
        <div className={styles.selectLocationButton}>
          SELECT LOCATION {viewLocations ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </Button>
      {viewLocations && <Table totalColumns={1} handleChange={handleChange} locations={locations} />}
    </div>
  )
}
