import styles from './Button.module.css'
import { buttonType } from '@/components/molecules/Form/Button/buttonType'

export function Button({
  children,
  width = '100%',
  height = '2.2rem',
  fontSize = '0.9rem',
  variant = 'contained',
  color = 'var(--outlined-button-color)',
  hoverColor = 'var(--contained-button-bg-hover-color)',
  padding = '0.5rem 1rem',
  withBorderRadius = true,
  ...props
}: buttonType) {
  return (
    <>
      <button
        className={styles.button}
        style={{
          width: width,
          height: height,
          fontSize: fontSize,
          backgroundColor:
            variant === 'contained' ? 'var(--contained-button-bg-color)' : 'transparent',
          borderColor: variant === 'text' ? 'transparent' : 'var(--contained-button-border-color)',
          borderRadius: withBorderRadius ? '0.5rem' : '0',
          color:
            variant === 'text'
              ? color
              : variant === 'contained'
              ? 'var(--contained-button-color)'
              : 'var(--outlined-button-color)',
          fill:
            variant === 'text'
              ? color
              : variant === 'contained'
              ? 'var(--contained-button-color)'
              : 'var(--outlined-button-color)',
          padding,
        }}
        {...props}
      >
        {children}
      </button>
      <style jsx>{`
        button:hover {
          fill: ${variant === 'contained' ? undefined : hoverColor} !important;
          color: ${variant === 'contained' ? undefined : hoverColor} !important;
          border-color: ${variant === 'text' ? 'transparent' : hoverColor} !important;
          background-color: ${variant === 'contained' ? hoverColor : undefined} !important;
        }
      `}</style>
    </>
  )
}
