import styles from './Settings.module.css'
import { NavLeftOptionElement } from '@/components/molecules/MenuOptions/OptionElement'
import { SettingsIcon } from '@/components/atoms/Icons/SettingsIcon'

export function Settings({ isOpen = true }: { isOpen?: boolean }) {
  return (
    <ul className={styles.settings} style={{ justifyContent: isOpen ? 'flex-start' : 'center' }}>
      <NavLeftOptionElement
        urlLink={'/settings'}
        icon={<SettingsIcon width='1.4rem' height='1.4rem' />}
        title={'Settings'}
        fontSize='0.8rem'
        isOpen={isOpen}
      />
    </ul>
  )
}
