import styles from './Menu.module.css'
import { Options } from '../Options'
import React from 'react'
import { MENU } from './config'

export function Menu({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={styles.menu}>
      {MENU.map((menu: any) => {
        return (
          <React.Fragment key={menu.id}>
            <Options menu={menu} isOpen={isOpen} />
          </React.Fragment>
        )
      })}
    </div>
  )
}
