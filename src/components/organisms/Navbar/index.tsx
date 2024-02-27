import styles from './Navbar.module.css'
import { LogoContainer } from '../../molecules/NavBar/LogoContainer'
import { Menu } from '../../molecules/NavBar/Menu'
import { Settings } from '../../molecules/NavBar/Settings'
import { UserInfo } from '../../molecules/NavBar/UserInfo'
import { useHandleOpen } from '@/hooks/useHandleOpen'
import { HiddenButton } from '../../molecules/NavBar/HideButton'

export function Navbar() {
  const { isOpen, handleToggle } = useHandleOpen({ initialValue: true })
  return (
    <nav className={`${styles.nav} ${styles.isClose}`}>
      <div className={`${isOpen ? styles.logoCont : styles.noDisplay}`}>
        <LogoContainer />
      </div>
      <div className={`${isOpen ? styles.mobile : undefined}`}></div>
      <Menu isOpen={isOpen} />
      <Settings isOpen={isOpen} />
      <UserInfo imageUrl='/images/unnamed.png' name='María' surname='Figueredo' isOpen={isOpen} />
      <HiddenButton handleToggle={handleToggle} isOpen={isOpen} />
    </nav>
  )
}
