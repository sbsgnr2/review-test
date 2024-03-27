import { ToggleOffIcon } from '@/components/atoms/Icons/ToggleOffIcon'
import { ToggleOnIcon } from '@/components/atoms/Icons/ToggleOnIcon'
import { useState } from 'react'
import styles from './Toggle.module.css'

export function Toggle({
  isActive = false,
  handleChange,
}: {
  isActive?: boolean
  handleChange?: (value: boolean) => void
}) {
  const [active, setActive] = useState<boolean>(isActive)
  function handleActive() {
    setActive(!active)
    handleChange && handleChange(!active)
  }
  return (
    <span
      className={styles.iconContainer}
      onClick={handleActive}
      style={{ fill: active ? 'var(--option-hover-color)' : 'var(--second-color)' }}
    >
      {active ? (
        <ToggleOnIcon width='2.5rem' height='2.5rem' />
      ) : (
        <ToggleOffIcon width='2.5rem' height='2.5rem' />
      )}
    </span>
  )
}
