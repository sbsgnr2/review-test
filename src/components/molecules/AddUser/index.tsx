import styles from '@/styles/CustomFormContainer.module.css'
import { TextBox } from '@/components/molecules/Form/TextBox'
import { BaseForm } from '@/components/molecules/Form/BaseForm'
import { TextArea } from '@/components/molecules/Form/TextArea/indext'
import { optionsTypeUser } from '@/mocks/addUserForm'
import { useAddUser } from './useAddUser'
import { AcessUser } from './AccessUser'
import { CustomPermission } from './CustomPermission'
import { MultipleTags } from '../Form/MultipleTags'
import { DDL } from '../DDL'

export function AddUserForm() {
  const {
    handleSubmit,
    mailsValidator,
    handleChangeSelectedUserAccess,
    handleChangeCustomPermission,
    handleUserType,
    handleTags,
  } = useAddUser()

  return (
    <>
      <div className={styles.container}>
        <BaseForm
          submitTitle='Add Users'
          handleSubmit={handleSubmit}
          horizontalJustify='flex-start'
        >
          <DDL
            options={optionsTypeUser}
            handleChange={handleUserType}
            label='User Type'
            width='15rem'
            height='1.9rem'
            backgroundList='var(--main-bg-color)'
          />
          <TextBox
            label='Emails'
            name='emails'
            required={true}
            variant='border_focused_outlined'
            withErrorPadding={false}
            placeholder='email@example.com, email2@example.com'
            width='100%'
            maxWidth='30rem'
            height='1.9rem'
            type='email'
            multiple={true}
            fontWeight={'500'}
            inputFontSize={'0.75rem'}
            validationFunction={mailsValidator}
          />
          <TextBox
            label='Subject'
            name='subject'
            required={false}
            variant='border_focused_outlined'
            withErrorPadding={false}
            placeholder='subject'
            height='1.9rem'
            width='100%'
            maxWidth='30rem'
            type='text'
            fontWeight={'500'}
            inputFontSize={'0.75rem'}
          />
          <TextArea
            label='Message'
            placeholder='Enter a message'
            width='100%'
            maxWidth='30rem'
            variant='border_focused_outlined'
            name='message'
            backgroundColor='var(--main-bg-color)'
            fontWeight={'500'}
            inputFontSize={'0.75rem'}
          />
          <MultipleTags onTagsChange={handleTags} maxWidth='25rem' />
          <AcessUser handleChangeSelectedUserAccess={handleChangeSelectedUserAccess} />
          <CustomPermission handleChangeCustomPermission={handleChangeCustomPermission} />
        </BaseForm>
      </div>
    </>
  )
}
