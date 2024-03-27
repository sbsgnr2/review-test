import { Button } from '../../Form/Button'
import styles from './SelectAll.module.css'
import { selectAllType } from './selectAllType'

export function SelectAll({ handleSelect }: selectAllType) {
  return (
    <div className={styles.selectAll}>
      <Button
        variant='text'
        onClick={() => handleSelect({ id: 'all' })}
        width='max-content'
        fontSize='0.8rem'
        ariaLabel='Select All Locations'
      >
        Select All Locations
      </Button>
    </div>
  )
}
