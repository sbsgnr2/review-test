import styles from './BaseForm.module.css'
import { baseFormType } from './baseFormType'
import { SubmitError } from '../SubmitError'
import { BaseFormButtons } from '../BaseFormButtons'

export function BaseForm({
  children,
  submitTitle,
  cancelTitle = 'Cancel',
  handleSubmit,
  handleCancel,
  gap = '0',
  horizontalJustify = 'center',
  loading = false,
  error = null,
}: baseFormType) {
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      style={{ gap, alignItems: horizontalJustify }}
    >
      {children}
      <SubmitError error={error} />
      <BaseFormButtons
        handleCancel={handleCancel}
        submitTitle={submitTitle}
        loading={loading}
        cancelTitle={cancelTitle}
        horizontalJustify={horizontalJustify}
      />
    </form>
  )
}
