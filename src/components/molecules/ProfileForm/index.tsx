import { validateUserSurname } from '@/utils/validations/user/surname'
import { TextBox } from '../Form/TextBox'
import { validateUserEmail } from '@/utils/validations/user/email'
import { validateUserName } from '@/utils/validations/user/name'
import { BaseForm } from '../Form/BaseForm'
import { ImageUpload } from '../Form/ImageUpload'
import styles from './ProfileForm.module.css'

import { useProfileForm } from './useProfileForm'
import { Toast } from '../Toast'

export function ProfileForm() {
  const { handleSubmit, handleImageRef, user, loading, messages, removeMessages } = useProfileForm()

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
            image={user?.image || null}
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
          value={user?.firstName || ''}
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
          value={user?.lastName || ''}
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
          value={user?.email || ''}
          validationFunction={validateUserEmail}
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
          value={user?.phone || ''}
          validationFunction={() => {
            return ''
          }}
        />
      </BaseForm>
    </>
  )
}
