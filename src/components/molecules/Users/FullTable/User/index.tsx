import { TableHeader } from '../../TableHeader'
import Table from '@/components/molecules/Table'
import { USER_HEADER, USER_TABLE_CONFIG } from '@/mocks/table'

export function UserTable({ data, isLoading, error, handlePagination }: any) {
  return (
    <>
      <TableHeader />
      <>
        {isLoading ? (
          'Loading...'
        ) : error ? (
          error.message
        ) : (
          <Table
            header={USER_HEADER}
            data={data?.data}
            tableConfig={USER_TABLE_CONFIG}
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
    </>
  )
}
