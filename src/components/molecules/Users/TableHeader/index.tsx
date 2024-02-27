import { optionsUsersFilters } from '@/mocks/users'
import { DDL } from '../../DDL'
import styles from './TableHeader.module.css'
import { CommonFilters } from '../CommonFilters'

export function TableHeader() {
  return (
    <div className={styles.container}>
      <CommonFilters />
      <DDL
        options={optionsUsersFilters}
        handleChange={() => {}}
        label=''
        width='15rem'
        required={false}
        backgroundList='var(--main-bg-color)'
        value={'1'}
      />
    </div>
  )
}
