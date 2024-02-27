import { validateUserSurname } from '@/utils/validations/user/surname'
import { TextBox } from '../Form/TextBox'
import { validateUserEmail } from '@/utils/validations/user/email'
import { validateUserName } from '@/utils/validations/user/name'
import { BaseForm } from '../Form/BaseForm'
import { ImageUpload } from '../Form/ImageUpload'
import styles from './ProfileForm.module.css'
import { validateCompanyName } from '@/utils/validations/company/name'

export function ProfileForm() {
  return (
    <BaseForm submitTitle='Save' handleSubmit={() => {}} horizontalJustify='flex-start'>
      <div className={styles.containerImage}>
        <ImageUpload name='userImage' alt='User Image' />
      </div>
      <TextBox
        label='Name'
        name='name'
        required={true}
        variant='border_focused_outlined'
        withErrorPadding={false}
        placeholder='Enter Your Name'
        width='100%'
        maxWidth='30rem'
        height='1.9rem'
        type='text'
        fontWeight={'500'}
        inputFontSize={'0.75rem'}
        validationFunction={validateUserName}
      />
      <TextBox
        label='Last Name'
        name='surname'
        required={true}
        variant='border_focused_outlined'
        withErrorPadding={false}
        placeholder='Last Name'
        width='100%'
        maxWidth='30rem'
        height='1.9rem'
        type='text'
        fontWeight={'500'}
        inputFontSize={'0.75rem'}
        validationFunction={validateUserSurname}
      />
      <TextBox
        label='Email'
        name='email'
        required={true}
        variant='border_focused_outlined'
        withErrorPadding={false}
        placeholder='Enter Your Email'
        width='100%'
        maxWidth='30rem'
        height='1.9rem'
        type='text'
        fontWeight={'500'}
        inputFontSize={'0.75rem'}
        validationFunction={validateUserEmail}
      />
      <TextBox
        label='Phone'
        name='phone'
        required={true}
        variant='border_focused_outlined'
        withErrorPadding={false}
        placeholder='Enter Your Phone Number'
        width='100%'
        maxWidth='30rem'
        height='1.9rem'
        type='text'
        fontWeight={'500'}
        inputFontSize={'0.75rem'}
        validationFunction={() => {
          return ''
        }}
      />
      <TextBox
        label='Company'
        name='company'
        required={true}
        variant='border_focused_outlined'
        withErrorPadding={false}
        placeholder='Enter Your Company Name'
        width='100%'
        maxWidth='30rem'
        height='1.9rem'
        type='text'
        fontWeight={'500'}
        inputFontSize={'0.75rem'}
        validationFunction={validateCompanyName}
      />
    </BaseForm>
  )
}
