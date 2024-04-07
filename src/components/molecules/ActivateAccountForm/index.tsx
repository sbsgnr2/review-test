import { validateUserSurname } from '@/utils/validations/user/surname'
import { TextBox } from '../Form/TextBox'
import { validateUserEmail } from '@/utils/validations/user/email'
import { validateUserName } from '@/utils/validations/user/name'
import { BaseForm } from '../Form/BaseForm'
import { ImageUpload } from '../Form/ImageUpload'
import styles from './ActivateAccountForm.module.css'
import { Toast } from '../Toast'
import { validatePassword } from '@/utils/validations/password'
import { useActivateAccountForm } from './useActivateAccountForm'

export function ActivateAccountForm({ data, token }: any) {
  const { handleSubmit, handleImageRef, loading, messages, removeMessages } =
    useActivateAccountForm({ token, data })

  return (
    <>
      <Toast messages={messages} removeMessages={removeMessages} />
      <BaseForm
        submitTitle='Save'
        handleSubmit={handleSubmit}
        horizontalJustify='flex-start'
        loading={loading}
      >
        <div className={styles.containerImage}>
          <ImageUpload
            name='userImage'
            alt='User Image'
            image={data?.image || null}
            handleFunction={handleImageRef}
          />
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
          value={data?.first_name || ''}
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
          value={data?.last_name || ''}
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
          disabled={true}
          value={data?.email || ''}
          validationFunction={validateUserEmail}
        />
        <TextBox
          label='New Password'
          name='password'
          required={true}
          variant='border_focused_outlined'
          withErrorPadding={false}
          placeholder='Enter Your New Password'
          width='100%'
          maxWidth='30rem'
          height='1.9rem'
          type='text'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
          validationFunction={validatePassword}
        />
        <TextBox
          label='Confirm New Password'
          name='repeatPassword'
          required={true}
          variant='border_focused_outlined'
          withErrorPadding={false}
          placeholder='Enter Your New Password'
          width='100%'
          maxWidth='30rem'
          height='1.9rem'
          type='text'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
          validationFunction={validatePassword}
        />
        <TextBox
          label='Phone'
          name='phone'
          required={false}
          variant='border_focused_outlined'
          withErrorPadding={false}
          placeholder='Enter Your Phone Number'
          width='100%'
          maxWidth='30rem'
          height='1.9rem'
          type='text'
          fontWeight={'500'}
          inputFontSize={'0.75rem'}
          value={data?.phone || ''}
          validationFunction={() => {
            return ''
          }}
        />
      </BaseForm>
    </>
  )
}
