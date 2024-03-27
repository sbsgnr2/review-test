import { Toggle } from '@/components/molecules/Form/Toggle'
import styles from './ToggleWithTitle.module.css'
import { toggleWithTitleType } from './toggleWithTitleType'

export function ToggleWithTitle({ title }: toggleWithTitleType) {
  return (
    <div className={styles.titleWithToggle}>
      <p className={styles.secondaryTitle}>{title}</p>
      <Toggle />
    </div>
  )
}
