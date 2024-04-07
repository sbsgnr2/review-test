import { Selector } from '../../Selector'
import { useHandleOpen } from '@/hooks/useHandleOpen'
import { UserTable } from './User'
import { ActivityTable } from './Activity'

export function FullTable({ data, isLoading, error, handlePagination }: any) {
  const { isOpen, handleOpen, handleClose } = useHandleOpen({ initialValue: true })

  return (
    <>
      <Selector
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        firstOptionText='Profile'
        secondOptionText='Activity'
      />
      {isOpen ? (
        <UserTable
          data={data}
          isLoading={isLoading}
          error={error}
          handlePagination={handlePagination}
        />
      ) : (
        <ActivityTable />
      )}
    </>
  )
}
