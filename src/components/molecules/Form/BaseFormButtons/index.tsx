import { Button } from '../Button'
import styles from './BaseFormButtons.module.css'

export function BaseFormButtons({
  handleCancel,
  horizontalJustify,
  cancelTitle,
  loading,
  submitTitle,
}: {
  handleCancel: any
  horizontalJustify: string
  cancelTitle: string
  loading: boolean
  submitTitle: string
}) {
  return (
    <div className={styles.buttons_container} style={{ justifyContent: horizontalJustify }}>
      {handleCancel && (
        <Button
          width='max-content'
          variant='outlined'
          type='button'
          onClick={handleCancel}
          height='1.8rem'
          fontSize='0.8rem'
          ariaLabel={cancelTitle}
        >
          {cancelTitle}
        </Button>
      )}
      {submitTitle && (
        <Button
          width='6rem'
          variant='contained'
          type='submit'
          height='1.8rem'
          fontSize='0.8rem'
          loading={loading}
          padding='0'
          ariaLabel={submitTitle}
        >
          {submitTitle}
        </Button>
      )}
    </div>
  )
}
