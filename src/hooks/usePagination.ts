import { paginationType } from "@/models/paginationType"
import { ChangeEvent, useState } from "react"

export function usePagination ({handlePagination, totalPages, rowsPerPage, totalResults}: paginationType) {
  const [page, setPage] = useState<number>(1)
  
  function updatePage({ newValue }: { newValue: number }) {
    if (newValue > 0 && newValue <= totalPages) {
      setPage(newValue)
      handlePagination({ value: newValue })
    }
  }

  function handlePage(event: ChangeEvent<HTMLInputElement>) {
    const newValue = parseInt(event.target.value)
    updatePage({ newValue })
  }

  function nextPage() {
    const newValue = page + 1
    updatePage({ newValue })
  }

  function lastPage() {
    const newValue = totalPages
    updatePage({ newValue })
  }

  function firstPage() {
    const newValue = 1
    updatePage({ newValue })
  }

  function prevPage() {
    const newValue = page - 1
    updatePage({ newValue })
  }

  function getInitialIntervalRow() {
    return page * rowsPerPage - (rowsPerPage - 1)
  }

  function getFinalIntervalRow() {
    return page * rowsPerPage > totalResults ? totalResults : page * rowsPerPage
  }

  return { page, nextPage, lastPage, firstPage, prevPage, getFinalIntervalRow, getInitialIntervalRow, handlePage }
}