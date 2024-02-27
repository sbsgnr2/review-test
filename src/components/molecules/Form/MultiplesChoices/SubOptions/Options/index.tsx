import React from 'react'
import styles from './Options.module.css'
import { CheckBox } from '../../../CheckBox'
import { SubOptionsType } from '../../MultiplesChoicesType'
import { OptionsType } from './OptionsType'
import { useHandleChecked } from './useHandleChecked'

export function Options({ handleChange = () => {}, option }: OptionsType) {
  const { handleChecked } = useHandleChecked({ handleChange })
  return (
    <div className={styles.options}>
      {option.options.map((suboption: SubOptionsType) => {
        return (
          <React.Fragment key={suboption.value}>
            <CheckBox
              withCheckedState={true}
              handleChange={() => handleChecked({ value: suboption.value })}
              label={suboption.label}
              checkLeft={true}
            />
          </React.Fragment>
        )
      })}
    </div>
  )
}
