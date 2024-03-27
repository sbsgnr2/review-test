import React from 'react'
import styles from './MultiplesChoices.module.css'
import { MultiplesChoicesType } from './MultiplesChoicesType'
import { SubOptions } from './SubOptions'
import { Button } from '../Button'
import { ArrowDownIcon } from '@/components/atoms/Icons/arrow_down_icon'
import { useHandleOpen } from '@/hooks/useHandleOpen'
import { ArrowUpIcon } from '@/components/atoms/Icons/arrow_up_icon'

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
  subtitle,
  buttonText,
}: MultiplesChoicesType) {
  const { isOpen, handleToggle } = useHandleOpen({})
  return (
    <div
      style={{
        width,
        fontSize,
        margin,
        borderBottom: isOpen || !buttonText ? 'solid 1px var(--border-color)' : 'none',
        maxWidth: '100%',
      }}
    >
      <p className={styles.title} style={{ fontSize: labelSize, fontWeight, color: labelColor }}>
        {label}
      </p>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {buttonText && (
        <div className={styles.button}>
          <Button
            type='button'
            variant='outlined'
            onClick={handleToggle}
            height='1.8rem'
            width='max-content'
            withBorderRadius={false}
            ariaLabel={buttonText}
          >
            {buttonText}
            {isOpen ? (
              <ArrowUpIcon width='1rem' height='1rem' />
            ) : (
              <ArrowDownIcon width='1rem' height='1rem' />
            )}
          </Button>
        </div>
      )}
      {(isOpen || !buttonText) && (
        <SubOptions
          handleChange={handleChange}
          options={options}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          padding={padding}
        />
      )}
    </div>
  )
}
