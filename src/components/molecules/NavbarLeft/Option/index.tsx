import { NavLeftOptionElement } from '@/components/molecules/MenuOptions/OptionElement'
import React from 'react'

export function Option({ option, isOpen }: any) {
  return (
    <React.Fragment key={option.href}>
      <NavLeftOptionElement
        urlLink={option.href}
        icon={option.icon}
        title={option.title}
        fontSize='0.8rem'
        isOpen={isOpen}
      />
    </React.Fragment>
  )
}
