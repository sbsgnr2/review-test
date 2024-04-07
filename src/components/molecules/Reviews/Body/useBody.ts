import { useState } from "react"
import useSWR from "swr"

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    switch (res.status) {
      case 401:
        window.location.href = '/login'
        break;
      default:
        throw new Error('No Data')
    }
  }
  return res.json()
}

export function useBody () {
  const [pageNumber, setPageNumber] = useState(1)
  const GET_ALL_URL = `/api/reviews/getReviews?page=${pageNumber}&pageSize=5`

  const { data, isLoading, error } = useSWR(
    GET_ALL_URL,
    fetcher,
    {
      refreshInterval: 2000,
    },
  )

  function handlePagination({ value }: any) {
    if (value > 0 && value <= Math.ceil(data?.total / data?.pageSize)) {
      setPageNumber(value)
    }
  }
  return { data, isLoading, error, handlePagination }
}