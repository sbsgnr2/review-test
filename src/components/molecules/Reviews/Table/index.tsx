import Table from '@/components/molecules/Table'
import { REVIEWS_HEADER, REVIEWS_TABLE_CONFIG } from '@/utils/constants/reviews'

export function ReviewTable({ data, isLoading, error, handlePagination }: any) {
  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : error ? (
        error.message
      ) : (
        <Table
          header={REVIEWS_HEADER}
          data={data?.data}
          tableConfig={REVIEWS_TABLE_CONFIG}
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
          padding='0 0 5rem 0'
        />
      )}
    </>
  )
}
