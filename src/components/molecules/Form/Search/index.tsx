import { SearchIcon } from '@/components/atoms/Icons/SearchIcon'
import styles from './Search.module.css'
import { searchType } from './searchType'

export function Search({ name, placeholder = 'Search' }: searchType) {
  return (
    <div className={styles.search}>
      <span>
        <SearchIcon width='1.3rem' height='1.3rem' />
      </span>
      <input name={name} type='text' placeholder={placeholder} />
    </div>
  )
}
