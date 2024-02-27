import { MultiplesChoices } from '../../Form/MultiplesChoices'
import { optionsAccessUser } from '@/mocks/addUserForm'
import { useHandleMC } from '../useHandleMC'
import { accessType } from './accessType'

export function AcessUser({ handleChangeSelectedUserAccess }: accessType) {
  const { handleSelecteds } = useHandleMC({
    handleChange: handleChangeSelectedUserAccess,
  })

  return (
    <MultiplesChoices
      label='Access User'
      options={optionsAccessUser}
      handleChange={handleSelecteds}
      borderColor='transparent'
      fontWeight={'500'}
      padding='1rem'
      width='30rem'
      backgroundColor='var(--main-bg-color)'
    />
  )
}
