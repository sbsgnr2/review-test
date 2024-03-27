import Link from 'next/link'
import { HorizontalMenuType, ItemType } from './HorizontalMenuType'
import styles from './HorizontalMenu.module.css'
import { useRouter } from 'next/router'

export function HorizontalMenu({ items }: HorizontalMenuType) {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <ul>
        {items?.map((item: ItemType) => {
          return (
            <li
              key={item.title}
              style={{
                borderBottom:
                  router.asPath === item.href ? 'solid 2px var(--focused-color)' : undefined,
              }}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
