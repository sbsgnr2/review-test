import styles from '@/styles/CustomFormContainer.module.css'
import { TextBox } from '@/components/molecules/Form/TextBox'
import { BaseForm } from '@/components/molecules/Form/BaseForm'
import { TextArea } from '@/components/molecules/Form/TextArea'
import { optionsTypeUser } from '@/mocks/addUserForm'
import { useAddUser } from './useAddUser'
import { MultipleTags } from '../Form/MultipleTags'
import { DDL } from '../DDL'
import { CustomPermission } from './CustomPermission'
import { validateUserEmail } from '@/utils/validations/user/email'
import { Selector } from '../Selector'
import { Toast } from '../Toast'

export function AddUserForm({ handleStep }: { handleStep: (num: number) => void }) {
  const {
    handleSubmit,
    mailsValidator,
    handleChangeCustomPermission,
    handleUserType,
    handleTags,
    isOpen,
    handleOpen,
    handleClose,
    messages,
    removeMessages,
    user,
    loading,
  } = useAddUser({ handleStep })

  return (
    <>
      <Toast messages={messages} removeMessages={removeMessages} />
      <div className={styles.container}>
        <Selector
          isOpen={isOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
          firstOptionText='Unique'
          secondOptionText='Multiples'
        />
        <BaseForm
          submitTitle='Next'
          handleSubmit={handleSubmit}
          horizontalJustify='flex-start'
          loading={loading}
        >
          <DDL
            options={optionsTypeUser}
            handleChange={handleUserType}
            label='User Type'
            width='15rem'
            height='1.9rem'
            value={user?.userType?.toString()}
            backgroundList='var(--main-bg-color)'
          />
          {(isOpen || true) && (
            <>
              <TextBox
                label='Name'
                name='name'
                required={false}
                variant='border_focused_outlined'
                withErrorPadding={false}
                placeholder='Enter Your Name'
                width='100%'
                maxWidth='30rem'
                height='1.9rem'
                type='text'
                fontWeight={'500'}
                inputFontSize={'0.75rem'}
                value={user?.name}
                validationFunction={() => null}
              />
              <TextBox
                label='Last Name'
                name='surname'
                required={false}
                variant='border_focused_outlined'
                withErrorPadding={false}
                placeholder='Last Name'
                width='100%'
                maxWidth='30rem'
                height='1.9rem'
                type='text'
                fontWeight={'500'}
                inputFontSize={'0.75rem'}
                value={user?.surname}
                validationFunction={() => null}
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
                value={user?.email}
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
                value={user?.phone}
                validationFunction={() => {
                  return ''
                }}
              />
            </>
          )}
          {false && (
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
          )}
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
            value={user?.subject}
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
            value={user?.message}
            inputFontSize={'0.75rem'}
          />
          <MultipleTags
            onTagsChange={handleTags}
            maxWidth='15rem'
            defaultValues={user?.tags || []}
          />
          <CustomPermission handleChangeCustomPermission={handleChangeCustomPermission} />
        </BaseForm>
      </div>
    </>
  )
}
