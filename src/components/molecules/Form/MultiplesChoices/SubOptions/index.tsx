import React from 'react'
import styles from './SubOptions.module.css'
import { OptionType } from '../MultiplesChoicesType'
import { SuboptionsType } from './SuboptionsType'
import { Options } from './Options'

export function SubOptions({
  handleChange = () => {},
  options,
  backgroundColor = 'var(--secondary-bg-color)',
  borderColor = 'transparent',
  padding = '0.8rem 1.2rem',
}: SuboptionsType) {
  return (
    <div
      className={styles.multiplesChoicesContainer}
      style={{ backgroundColor, borderColor, padding }}
    >
      {options?.map((option: OptionType) => {
        return (
          <div key={option.key} className={styles.optionsCont}>
            {option.subtitle && <p className={styles.subtitle}>{option.subtitle}</p>}
            <Options option={option} handleChange={handleChange} />
          </div>
        )
      })}
    </div>
  )
}
