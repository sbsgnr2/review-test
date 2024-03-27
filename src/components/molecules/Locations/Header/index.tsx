import { Button } from '../../Form/Button'
import styles from './Header.module.css'
import { headerType } from './headerType'

export function Header({ selectedItems, handleSelect }: headerType) {
  return (
    <div className={styles.headerSecCol}>
      <p>Assigned Locations ({selectedItems.length || 0}) and Groups (0)</p>
      {selectedItems.length > 0 && (
        <Button
          variant='text'
          width='max-content'
          color='var(--contrast-color)'
          hoverColor='var(--soft-border-color)'
          fontSize='0.8rem'
          height='max-content'
          padding='0'
          onClick={() => handleSelect({ id: 'all' })}
          ariaLabel='remove all'
        >
          Remove All
        </Button>
      )}
    </div>
  )
}
