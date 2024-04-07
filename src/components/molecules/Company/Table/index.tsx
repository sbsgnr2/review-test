import Table from '@/components/molecules/Table'
import { COMPANY_HEADER, COMPANY_TABLE_CONFIG } from '@/utils/constants/companies'

export function CompanyTable({ data, isLoading, error, handlePagination }: any) {
  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : error ? (
        error.message
      ) : (
        <Table
          header={COMPANY_HEADER}
          data={data?.data}
          tableConfig={COMPANY_TABLE_CONFIG}
          width='100%'
          backgroundColor='transparent'
          headerColor='var(--primary-color)'
          handleDelete={() => {}}
          handleEdit={() => {}}
          totalPages={Math.ceil(data?.total / data?.pageSize)}
          totalResults={data?.total}
          rowsPerPage={data?.pageSize}
          handlePagination={handlePagination}
          actualPage={data?.page}
        />
      )}
    </>
  )
}
