import styles from './Tag.module.css'
import { CloseIcon } from '@/components/atoms/Icons/CloseIcon'
import { Button } from '../../Button'
import { TagType } from './TagType'

export function Tag({ handleRemoveTag, index, tag }: TagType) {
  return (
    <div className={styles.tag} key={tag}>
      <p>{tag}</p>
      <Button
        type='button'
        variant='text'
        onClick={() => handleRemoveTag(index)}
        color='var(--outlined-button-color)'
        height='1.8rem'
        ariaLabel='close'
      >
        <CloseIcon width='0.85rem' height='0.85rem' />
      </Button>
    </div>
  )
}
