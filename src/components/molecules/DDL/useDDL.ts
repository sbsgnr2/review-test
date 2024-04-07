import { useEffect, useState } from "react"
import { useDDLType } from "./DDLType"

export function useDDL ({ handleChange, value, resetSignal }: useDDLType) {
  const [selected, setSelected] = useState<string>(value || '')

  useEffect(() => {
    setSelected(value || '')
  }, [resetSignal, value])

  function handleSelected(selectedValue: string) {
    setSelected(selectedValue)
    handleChange(selectedValue)
  }

  return { selected, handleSelected }
}