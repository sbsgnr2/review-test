import { useState } from "react"
import { handleSelectColumnType } from "./headerTableType"
import { objectDataType } from "../tableType"

export function useHeader ({ orderData }: {orderData: ({key, isAsc}:{key: string, isAsc: boolean}) => objectDataType[]}) {
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null)
  const [isAscOrder, setIsAscOrder] = useState<boolean>(true)

  function handleSelectedColumn({ field }: handleSelectColumnType) {
    if (field === selectedColumn) {
      orderData({key: field, isAsc: !isAscOrder})
      setIsAscOrder(!isAscOrder)
    } else {
      orderData({key: field, isAsc: true})
      setSelectedColumn(field)
      setIsAscOrder(true)
    }
  }
  return {handleSelectedColumn, selectedColumn, isAscOrder}
}