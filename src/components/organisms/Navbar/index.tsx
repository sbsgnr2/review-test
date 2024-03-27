import { useHandleOpen } from '@/hooks/useHandleOpen'
import styles from './Navbar.module.css'
import { LogoContainer } from '@/components/molecules/NavbarLeft/LogoContainer'
import { Menu } from '@/components/molecules/NavbarLeft/Menu'
import { Settings } from '@/components/molecules/NavbarLeft/Settings'
import { UserInfo } from '@/components/molecules/NavbarLeft/UserInfo'
import { HiddenButton } from '@/components/molecules/NavbarLeft/HideButton'

export function Navbar() {
  const { isOpen, handleToggle } = useHandleOpen({ initialValue: true })
  return (
    <nav className={`${styles.nav} ${styles.isClose}`}>
      <div>
        <span style={{ display: isOpen ? 'block' : 'none' }} className={styles.bigLogo}>
          <span>
            <LogoContainer />
          </span>
        </span>
        <span style={{ display: isOpen ? 'none' : 'block' }} className={styles.smallLogo}></span>
      </div>
      <Menu isOpen={isOpen} />
      <Settings isOpen={isOpen} />
      <UserInfo isOpen={isOpen} />
      <HiddenButton handleToggle={handleToggle} isOpen={isOpen} />
    </nav>
  )
}
