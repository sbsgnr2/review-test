import Link from 'next/link'
import styles from './NavigationText.module.css'
import { navigationTextType } from './navigationTextType'

export function NavigationText({ text, href }: navigationTextType) {
  return (
    <Link className={styles.linkText} href={href}>
      {text}
    </Link>
  )
}
