import { HeaderSection } from '@/components/molecules/HeaderSection'
import { CommonFilters } from '@/components/molecules/Users/CommonFilters'
import { CompanyTable } from '@/components/molecules/Company/Table'
import { useBody } from './useBody'

export function Body({ total }: { total: number }) {
  const { data, isLoading, error, handlePagination } = useBody()

  return (
    <>
      <HeaderSection
        textButton='+ Add Company'
        title='Companies'
        href='/settings/companies/add-company'
        count={total}
      />
      <CommonFilters />
      <CompanyTable
        data={data}
        isLoading={isLoading}
        error={error}
        handlePagination={handlePagination}
      />
    </>
  )
}
