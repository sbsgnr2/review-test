import { BaseForm } from '../../Form/BaseForm'
import { TextBox } from '../../Form/TextBox'
import styles from './RecoveryForm.module.css'
import { useRecoveryForm } from './useRecoveryForm'

export function RecoveryForm() {
  const { onSubmit } = useRecoveryForm()

  return (
    <BaseForm submitTitle='Send Email' handleSubmit={onSubmit}>
      <div className={styles.inputs_container}>
        <TextBox
          label='Email'
          changeValue={() => {}}
          name='email'
          required={false}
          variant='focused_outlined'
          withErrorPadding={false}
          placeholder='email@example.com'
          width='100%'
        />
      </div>
    </BaseForm>
  )
}
