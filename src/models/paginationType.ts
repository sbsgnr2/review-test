export interface paginationType {
  handlePagination: ({ value }: { value: number }) => void
  totalPages: number
  rowsPerPage: number
  totalResults: number
}
