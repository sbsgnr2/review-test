import { Selector } from '../Selector'
import { useHandleOpen } from '@/hooks/useHandleOpen'
import { UserTable } from './User'
import { ActivityTable } from './Activity'

export function FullTable() {
  const { isOpen, handleOpen, handleClose } = useHandleOpen({ initialValue: true })

  return (
    <>
      <Selector isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} />
      {isOpen ? <UserTable /> : <ActivityTable />}
    </>
  )
}
