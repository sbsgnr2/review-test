import { Button } from '../Form/Button'
import { SectionTitle } from '../SectionTitle'
import styles from './Header.module.css'
import { headerType } from './headerType'
import { useHeader } from './useHeader'

export function HeaderSection({ count = 0, textButton, title, href, children }: headerType) {
  const { handleClick, getTotal } = useHeader({ href })

  return (
    <div className={styles.sectionTitle}>
      <div className={styles.title}>
        <SectionTitle title={title} />
        <p className={styles.count}>({getTotal() || count})</p>
        {textButton && (
          <Button height='1.7rem' fontSize='0.8rem' onClick={handleClick} ariaLabel={textButton}>
            {textButton}
          </Button>
        )}
      </div>
      {children}
    </div>
  )
}
