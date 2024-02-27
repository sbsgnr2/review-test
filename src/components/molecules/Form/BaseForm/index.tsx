import styles from './BaseForm.module.css'
import { Button } from '@/components/molecules/Form/Button'
import { baseFormType } from './baseFormType'

export function BaseForm({
  children,
  submitTitle,
  cancelTitle = 'Cancel',
  handleSubmit,
  handleCancel,
  gap = '0',
  horizontalJustify = 'center',
}: baseFormType) {
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      style={{ gap, alignItems: horizontalJustify }}
    >
      {children}
      <div className={styles.buttons_container} style={{ justifyContent: horizontalJustify }}>
        {handleCancel && (
          <Button
            width='max-content'
            variant='outlined'
            type='button'
            onClick={handleCancel}
            height='1.8rem'
            fontSize='0.8rem'
          >
            {cancelTitle}
          </Button>
        )}
        <Button
          width='max-content'
          variant='contained'
          type='submit'
          height='1.8rem'
          fontSize='0.8rem'
        >
          {submitTitle}
        </Button>
      </div>
    </form>
  )
}
