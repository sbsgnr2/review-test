import styles from './InputsContainer.module.css'
import { TextBox } from '@/components/molecules/Form/TextBox'

export function InputsContainer() {
  return (
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
      <TextBox
        label='Password'
        type={'password'}
        changeValue={() => {}}
        name='password'
        required={false}
        variant='focused_outlined'
        withErrorPadding={false}
        placeholder='password'
        width='100%'
      />
    </div>
  )
}
