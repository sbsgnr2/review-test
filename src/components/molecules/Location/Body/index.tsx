import { HeaderSection } from '@/components/molecules/HeaderSection'
import { CommonFilters } from '@/components/molecules/Users/CommonFilters'
import { LocationTable } from '@/components/molecules/Location/Table'
import { useBody } from './useBody'

export function Body({ total }: { total: number }) {
  const { data, isLoading, error, handlePagination } = useBody()
  return (
    <>
      <HeaderSection
        textButton='+ Add Location'
        title='Locations'
        href='/settings/locations/add-location'
        count={data?.data?.length || total}
      />
      <CommonFilters />
      <LocationTable
        data={data}
        isLoading={isLoading}
        error={error}
        handlePagination={handlePagination}
      />
    </>
  )
}
