import React from 'react'
import styles from './MultiplesChoices.module.css'
import { MultiplesChoicesType } from './MultiplesChoicesType'
import { SubOptions } from './SubOptions'

export function MultiplesChoices({
  handleChange = () => {},
  options,
  label = '',
  width = '100%',
  fontSize = '0.8rem',
  labelSize = '0.7rem',
  backgroundColor = 'var(--secondary-bg-color)',
  borderColor = 'transparent',
  fontWeight = '500',
  labelColor = 'var(--second-color)',
  margin = '0.2rem 0',
  padding = '0.8rem 1.2rem',
}: MultiplesChoicesType) {
  return (
    <div style={{ width, fontSize, margin, borderBottom: 'solid 1px var(--border-color)' }}>
      <p className={styles.title} style={{ fontSize: labelSize, fontWeight, color: labelColor }}>
        {label}
      </p>
      <SubOptions
        handleChange={handleChange}
        options={options}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        padding={padding}
      />
    </div>
  )
}
