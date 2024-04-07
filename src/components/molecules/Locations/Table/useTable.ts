import { useState } from "react"
import { useTableType } from "./tableType"
import useSWR from "swr"
import { useLocations } from "@/zustand/locations"

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

export function useTable ({ handleChange, locations }: useTableType) {
  const [selectedItems, setSelectedItems] = useState<string[]>(locations || [])
  const GET_ALL_URL = `/api/locations/getAllLocations`

  const { setLocations } = useLocations()

  const { data } = useSWR(
    GET_ALL_URL,
    fetcher,
    {
      refreshInterval: 2000,
      onSuccess: () => {
        if (data) {
          setLocations(data)
        }
      }
    },
  )
  
  function handleAddItem({ id }: { id: string }) {
    if (id === 'all') {
      setSelectedItems(data?.data?.map((item: any) => item.id))
      handleChange && handleChange(data?.data?.map((item: any) => item.id))
    } else if (!selectedItems.includes(id)) {
      setSelectedItems([...selectedItems, id])
      handleChange && handleChange([...selectedItems, id])
    }
  }

  function handleRemoveItem({ id }: { id: string }) {
    if (id === 'all') {
      setSelectedItems([])
      handleChange && handleChange([])
    } else {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id))
      handleChange && handleChange(selectedItems.filter((itemId) => itemId !== id))
    }
  }
  
  return { LOCATIONS: data?.data, selectedItems, handleAddItem, handleRemoveItem }
}