import { SearchIcon } from '@/components/atoms/Icons/SearchIcon'
import styles from './Search.module.css'
import { searchType } from './searchType'

export function Search({ handleSearch }: searchType) {
  return (
    <div className={styles.search}>
      <input type='text' placeholder='Search all locations...' onChange={handleSearch} />
      <span>
        <SearchIcon width='1.3rem' height='1.3rem' />
      </span>
    </div>
  )
}
