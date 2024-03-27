import { buttonType } from '../buttonType'
import styles from './IconButton.module.css'

export function IconButton({
  children,
  width = '100%',
  height = '2rem',
  ariaLabel = 'button',
  fontSize = '0.75rem',
  variant = 'text',
  withBorderRadius = true,
  borderRadius = '5px',
  color = 'var(--primary-color)',
  padding = '0',
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
          borderRadius: withBorderRadius ? borderRadius : '0',
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
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </button>
    </>
  )
}
