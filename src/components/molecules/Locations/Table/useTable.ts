import { useState } from "react"
import { itemType, useTableType } from "./tableType"
import { LOCATIONS } from "@/mocks/addLocationForm"

export function useTable ({ handleChange, locations }: useTableType) {
  const [selectedItems, setSelectedItems] = useState<string[]>(locations || [])

  function handleAddItem({ id }: { id: string }) {
    if (id === 'all') {
      setSelectedItems(LOCATIONS.map((item: itemType) => item.id))
      handleChange && handleChange(LOCATIONS.map((item: itemType) => item.id))
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
  
  return { LOCATIONS, selectedItems, handleAddItem, handleRemoveItem }
}