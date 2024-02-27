import { inputErrorType } from '@/components/atoms/Forms/InputErrorMessage/errorType'
import styles from './InputErrorMessage.module.css'

export function InputErrorMessage({ error, withErrorPadding = false }: inputErrorType) {
  return (
    <>
      {error && (
        <div className={styles.error} style={{ position: withErrorPadding ? 'absolute' : 'relative' }}>
          {error}
        </div>
      )}
    </>
  )
}
