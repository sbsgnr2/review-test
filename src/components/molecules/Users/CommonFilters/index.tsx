import { Button } from '../../Form/Button'
import { Search } from '../../Form/Search'
import styles from './CommonFilters.module.css'

export function CommonFilters() {
  return (
    <div className={styles.headerTable}>
      <div className={styles.filtersActions}>
        <p className={styles.filterText}>FILTERS</p>
        <Button variant='text' width='max-content' padding='0' fontSize='0.8rem'>
          <p className={styles.clearText}>Clear All</p>
        </Button>
      </div>
      <Search name='search' />
    </div>
  )
}
