import { useState } from "react"
import { useDDLType } from "./DDLType"

export function useDDL ({handleChange, value}: useDDLType) {
  const [selected, setSelected] = useState<string>(value || '')

  function handleSelected(selectedValue: string) {
    setSelected(selectedValue)
    handleChange(selectedValue)
  }

  return { selected, handleSelected }
}