import { MultiplesChoices } from '../../Form/MultiplesChoices'
import { optionsCustomPermissions } from '@/mocks/addUserForm'
import { useHandleMC } from '../useHandleMC'
import { accessType } from './accessType'

export function CustomPermission({ handleChangeCustomPermission }: accessType) {
  const { handleSelecteds } = useHandleMC({
    handleChange: handleChangeCustomPermission,
  })

  return (
    <MultiplesChoices
      label='User Permissions'
      options={optionsCustomPermissions}
      handleChange={handleSelecteds}
      borderColor='transparent'
      fontWeight={'500'}
      padding='1rem'
      width='30rem'
      backgroundColor='var(--main-bg-color)'
      subtitle='* Select the access level appropiate to your team member. All users with login access can
      view data, download reports and receive alerts'
      buttonText='Select Permissions'
    />
  )
}
