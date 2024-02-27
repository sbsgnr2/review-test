import { childrenType } from '@/models/childrenType'
import styles from './DefaultLayout.module.css'
import { Navbar } from '@/components/organisms/Navbar'

export function DefaultLayout({ children }: childrenType) {
  return (
    <div className={styles.content}>
      <Navbar />
      {children}
    </div>
  )
}
