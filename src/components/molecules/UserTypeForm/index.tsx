import { validateUserTypeName } from '@/utils/validations/userType/name'
import { BaseForm } from '../Form/BaseForm'
import { TextBox } from '../Form/TextBox'
import { useUserType } from './useUserType'

export function UserTypeForm() {
  const { handleSubmit } = useUserType()
  return (
    <>
      <BaseForm submitTitle='Add Users Type' handleSubmit={handleSubmit} gap='1rem'>
        <TextBox
          label='User Type Name'
          name='name'
          required={true}
          variant='focused_outlined'
          withErrorPadding={false}
          placeholder='User Type'
          width='100%'
          type='text'
          fontWeight={'600'}
          validationFunction={validateUserTypeName}
        />
      </BaseForm>
    </>
  )
}
