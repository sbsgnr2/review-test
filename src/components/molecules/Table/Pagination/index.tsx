import styles from './Pagination.module.css'
import { ChevronLeftIcon } from '@/components/atoms/Icons/ChevronLeftIcon'
import { IconButton } from '../../Form/Button/IconButton'
import { ChevronRightIcon } from '@/components/atoms/Icons/ChevronRightIcon'
import { usePagination } from '@/hooks/usePagination'
import { paginationType } from '../../../../models/paginationType'
import { FirstPageIcon } from '@/components/atoms/Icons/FirstPageIcon'
import { LastPageIcon } from '@/components/atoms/Icons/LastPageIcon'

export function Pagination({
  handlePagination = ({ value }: { value: number }) => {},
  totalPages = 1,
  totalResults = 1,
  rowsPerPage = 5,
}: paginationType) {
  const {
    page,
    nextPage,
    lastPage,
    firstPage,
    prevPage,
    getFinalIntervalRow,
    getInitialIntervalRow,
    handlePage,
  } = usePagination({ handlePagination, totalPages, totalResults, rowsPerPage })
  return (
    <>
      {totalPages > 0 && (
        <div className={styles.pagination}>
          <p className={styles.perPage}>Rows per page: {rowsPerPage}</p>
          <p>
            {getInitialIntervalRow()} - {getFinalIntervalRow()} of {totalResults}
          </p>
          <div className={styles.actionButtons}>
            <IconButton onClick={firstPage} width='max-content'>
              <FirstPageIcon />
            </IconButton>
            <IconButton onClick={prevPage} width='max-content'>
              <ChevronLeftIcon />
            </IconButton>
            <input type='number' name='page' value={page} onChange={handlePage} />
            <IconButton onClick={nextPage} width='max-content'>
              <ChevronRightIcon />
            </IconButton>
            <IconButton onClick={lastPage} width='max-content'>
              <LastPageIcon />
            </IconButton>
          </div>
        </div>
      )}
    </>
  )
}
