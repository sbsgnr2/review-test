import { HeaderSection } from '@/components/molecules/HeaderSection'
import { HeaderButtons } from '@/components/molecules/Reviews/HeaderButtons'
import { Filters } from '@/components/molecules/Reviews/Filters'
import { ReviewTable } from '@/components/molecules/Reviews/Table'
import { useBody } from './useBody'

export function Body({ total }: { total: number }) {
  const { data, isLoading, error, handlePagination } = useBody()

  return (
    <>
      <HeaderSection title='Reviews' count={total}>
        <HeaderButtons />
      </HeaderSection>
      <Filters />
      <ReviewTable
        data={data}
        isLoading={isLoading}
        error={error}
        handlePagination={handlePagination}
      />
    </>
  )
}
