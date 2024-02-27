import { Button } from '../Form/Button'
import { SectionTitle } from '../SectionTitle'
import styles from './Header.module.css'
import { headerType } from './headerType'
import { useHeader } from './useHeader'

export function HeaderSection({ count = 0, textButton, title, href }: headerType) {
  const { handleClick } = useHeader({ href })
  return (
    <div className={styles.sectionTitle}>
      <SectionTitle title={title} />
      <p className={styles.count}>({count})</p>
      <Button height='1.7rem' fontSize='0.8rem' onClick={handleClick}>
        {textButton}
      </Button>
    </div>
  )
}
