import { AddIcon } from '@/components/atoms/Icons/AddIcon'
import { CheckIndeterminateIcon } from '@/components/atoms/Icons/CheckIndeterminateIcon'
import { Button } from '../../Form/Button'
import styles from './Item.module.css'
import { itemCompType } from './itemType'

export function Item({ item, handleSelect, isAddIcon = true }: itemCompType) {
  return (
    <div className={styles.item}>
      <div className={styles.itemFirstColumn}>
        <p className={styles.itemTitle}>{item.title}</p>
        <p className={styles.itemParagraph}>{item.subtitle}</p>
        <p className={styles.itemParagraph}>{item.direction}</p>
      </div>
      <div className={styles.buttonCont}>
        <Button
          variant='contained'
          width='1.2rem'
          height='1.2rem'
          padding='0'
          borderRadius='100%'
          onClick={() => handleSelect({ id: item.id })}
          ariaLabel={isAddIcon ? 'add' : 'remove'}
        >
          <span className={styles.itemCont}>
            {isAddIcon ? (
              <AddIcon width='0.9rem' height='0.9rem' />
            ) : (
              <CheckIndeterminateIcon width='0.9rem' height='0.9rem' />
            )}
          </span>
        </Button>
      </div>
    </div>
  )
}
