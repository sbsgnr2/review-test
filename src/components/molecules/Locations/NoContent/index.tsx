import { LocationIcon } from '@/components/atoms/Icons/LocationIcon'
import styles from './NoContent.module.css'

export function NoContent() {
  return (
    <div className={styles.noContent}>
      <div className={styles.circle}>
        <LocationIcon width='1.6rem' height='1.6rem' />
      </div>
      <p className={styles.titleNoLoc}>No Asigned Locations or Groups</p>
      <p className={styles.paragraphNoLoc}>
        Help your teammates help your monitor review activity. Give them access to locations
      </p>
    </div>
  )
}
