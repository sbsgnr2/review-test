import Table from '@/components/molecules/Table'
import { LOCATION_HEADER, LOCATION_TABLE_CONFIG } from '@/mocks/table'

export function LocationTable({ data, isLoading, error, handlePagination }: any) {
  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : error ? (
        error.message
      ) : (
        <Table
          header={LOCATION_HEADER}
          data={data?.data}
          tableConfig={LOCATION_TABLE_CONFIG}
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
