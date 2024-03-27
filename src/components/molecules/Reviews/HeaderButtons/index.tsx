import { IconButton } from '../../Form/Button/IconButton'
import { ArrowDownwardIcon } from '@/components/atoms/Icons/ArrowDownwardIcon'
import styles from './HeaderButtons.module.css'
import { FileDownloadIcon } from '@/components/atoms/Icons/FileDownloadIcon'

export function HeaderButtons() {
  return (
    <div className={styles.buttons}>
      <IconButton
        variant='contained'
        padding='0.2rem 0.7rem'
        fontSize='0.7rem'
        ariaLabel='CSV button'
      >
        <ArrowDownwardIcon width='0.9rem' height='0.9rem' />
        <p className={styles.paragraph}>
          <span className={styles.bold}>CSV</span> (All Reviews)
        </p>
      </IconButton>
      <IconButton
        variant='contained'
        padding='0.2rem 0.7rem'
        fontSize='0.7rem'
        ariaLabel='Print button'
      >
        <ArrowDownwardIcon width='0.9rem' height='0.9rem' />
        <p className={styles.paragraph}>
          <span className={styles.bold}>Print</span> (up to 250)
        </p>
      </IconButton>
      <IconButton
        variant='contained'
        padding='0.2rem 0.7rem'
        fontSize='0.7rem'
        ariaLabel='Export Tableau button'
      >
        <ArrowDownwardIcon width='0.9rem' height='0.9rem' />
        <p className={styles.paragraph}>
          <span className={styles.bold}>Export Tableau</span>
        </p>
      </IconButton>
      <IconButton
        variant='contained'
        padding='0.2rem 0.7rem'
        fontSize='0.7rem'
        ariaLabel='Schedule Export button'
      >
        <FileDownloadIcon width='0.9rem' height='0.9rem' />
        <p className={styles.paragraph}>
          <span className={styles.bold}>Schedule Export</span>
        </p>
      </IconButton>
    </div>
  )
}
