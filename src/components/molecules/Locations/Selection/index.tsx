import { Button } from '../../Form/Button'
import styles from './Types.module.css'
import { typesType } from './typesType'

export function Selection({ items, selectedItems }: typesType) {
  return (
    <div className={styles.types}>
      <div className={styles.option}>
        <Button
          variant='text'
          onClick={() => {}}
          width='100%'
          color='var(--primary-color)'
          ariaLabel='Select Locations'
        >
          <p className={styles.locationOption}>
            Locations ({items.length - selectedItems.length || 0})
          </p>
        </Button>
      </div>
      <div className={styles.optionUnselect}>
        <Button
          variant='text'
          onClick={() => {}}
          width='100%'
          color='var(--primary-color)'
          ariaLabel='Select Groups'
        >
          <p className={styles.locationOption}>Groups (0)</p>
        </Button>
      </div>
    </div>
  )
}
