import { MultiplesChoices } from '../../Form/MultiplesChoices'
import { optionsCustomPermissions } from '@/mocks/addUserForm'
import { useHandleMC } from '../useHandleMC'

export function CustomPermission({
  handleChangeCustomPermission,
}: {
  handleChangeCustomPermission: ({ value }: { value: string[] }) => void
}) {
  const { handleSelecteds } = useHandleMC({
    handleChange: handleChangeCustomPermission,
  })
  return (
    <MultiplesChoices
      label='Custome Permition'
      options={optionsCustomPermissions}
      handleChange={handleSelecteds}
      borderColor='transparent'
      fontWeight={'500'}
      padding='1rem'
      width='30rem'
      backgroundColor='var(--main-bg-color)'
    />
  )
}
