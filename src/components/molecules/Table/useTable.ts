import { orderArrayOfObject } from "@/utils/functions/orderArrayOfObject"
import { useState } from "react"
import { objectDataType, useTableType } from "./tableType"

export function useTable ({ data, handleOrderData }: useTableType) {
  const [checkedArr, setCheckedArr] = useState<string[]>([])
  const [dataArr, setDataArr] = useState<objectDataType[]>(data)

  function handleCheckedArr({ key }: {key: string}) {
    const index = checkedArr.indexOf(key)
    if (key === 'all') {
      if (checkedArr.length === data.length) {
        setCheckedArr([])
      } else {
        const newArray = data.map((data: objectDataType) => data.id)
        setCheckedArr(newArray)
      }
    } else if (index !== -1) {
      const auxArr = [...checkedArr]
      auxArr.splice(index, 1)
      setCheckedArr(auxArr)
    } else {
      setCheckedArr([...checkedArr, key])
    }
  }

  function orderData({key, isAsc}:{key: string, isAsc: boolean}): objectDataType[] {
    if (handleOrderData) {
      const orderedData = handleOrderData({key, isAsc})
      return orderedData
    } else {
      const orderedData = orderArrayOfObject({arr: dataArr, key, isAsc})
      setDataArr([...orderedData])
      return orderedData
    }
  }

  return { checkedArr, handleCheckedArr, orderData, dataArr }
}