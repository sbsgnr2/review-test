import styles from './Options.module.css'
import { ExpandMoreIcon } from '@/components/atoms/Icons/ExpandMoreIcon'
import { useHandleOpen } from '@/hooks/useHandleOpen'
import { ExpandLessIcon } from '@/components/atoms/Icons/ExpandLessIcon'
import { Option } from '../Option'
import React from 'react'

export function Options({ menu, isOpen }: any) {
  const { isOpen: isExpand, handleToggle } = useHandleOpen({})

  return (
    <div className={styles.options} key={menu.id}>
      {menu.title && isOpen && (
        <div className={styles.sectionTitle}>
          <p className={styles.title}>{menu.title}</p>
          <span onClick={handleToggle}>{!isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
        </div>
      )}
      {menu.title && <div className={`${isOpen ? styles.borderBottom : styles.withBorder}`}></div>}
      {!isExpand &&
        menu.options?.map((option: any) => {
          return (
            <React.Fragment key={option.title}>
              <Option option={option} isOpen={isOpen} />
            </React.Fragment>
          )
        })}
    </div>
  )
}
