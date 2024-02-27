import { buttonType } from '../buttonType'
import styles from './IconButton.module.css'

export function IconButton({ children, width = '100%', height = '2.2rem', ...props }: buttonType) {
  return (
    <>
      <button
        className={styles.button}
        style={{
          width: width,
          height: height,
        }}
        {...props}
      >
        {children}
      </button>
    </>
  )
}
