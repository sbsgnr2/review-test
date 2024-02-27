import styles from './OptionElement.module.css'
import { optionElementType } from '@/components/molecules/MenuOptions/OptionElement/optionElementType'
import Link from 'next/link'
import { useOptionElement } from './useOptionElement'

export function NavLeftOptionElement({
  title,
  icon,
  urlLink,
  fontSize = '1rem',
  isOpen = true,
}: optionElementType) {
  const { linkClass } = useOptionElement({ urlLink })
  return (
    <li className={styles.li} style={{ fontSize }}>
      <Link href={urlLink} style={{ color: linkClass, fill: linkClass }}>
        {icon}
        {isOpen && <span className={styles.title}>{title}</span>}
      </Link>
    </li>
  )
}
