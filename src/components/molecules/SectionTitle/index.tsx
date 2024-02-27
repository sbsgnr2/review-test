import styles from './SectionTitle.module.css'
import { sectionTitleType } from '@/components/molecules/SectionTitle/sectionTitleType'

export function SectionTitle({ title, icon = null }: sectionTitleType) {
  return (
    <div className={styles.sectionTitle}>
      {icon}
      <h1>{title}</h1>
    </div>
  )
}
