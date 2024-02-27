import React from 'react'
import styles from './MenuSectionCard.module.css'
import { sectionCardItemType } from '@/models/sectionCardType'
import { Subtitle } from '@/components/atoms/Subtitle'
import { CardButton } from '@/components/molecules/Form/Button/CardButton'
import { menuSectionCardType } from './menuSectionCardType'

export default function MenuSectionCard({ settingItem }: menuSectionCardType) {
  return (
    <article key={settingItem.sectionTitle} className={styles.article}>
      <Subtitle text={settingItem.sectionTitle} />
      <div className={styles.menuContainer}>
        {settingItem.items?.map((item: sectionCardItemType) => {
          return (
            <React.Fragment key={item.title}>
              <CardButton title={item.title} subtitle={item.subtitle} href={item.href}>
                {item.icon}
              </CardButton>
            </React.Fragment>
          )
        })}
      </div>
    </article>
  )
}
