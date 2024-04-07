import { HeaderSection } from '@/components/molecules/HeaderSection'
import { FullTable } from '@/components/molecules/Users/FullTable'
import { useBody } from './useBody'

export function Body({ total }: { total: number }) {
  const { data, isLoading, error, handlePagination } = useBody()
  return (
    <>
      <HeaderSection
        textButton='+ Add User'
        title='Users'
        href='/settings/users/add-user/create-profile'
        count={data?.data?.length || total}
      />
      <FullTable
        data={data}
        isLoading={isLoading}
        error={error}
        handlePagination={handlePagination}
      />
    </>
  )
}
