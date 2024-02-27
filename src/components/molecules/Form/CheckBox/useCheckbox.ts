import { ChangeEvent, useState } from "react"
import { useCheckboxType } from "./CheckBoxType"

export function useCheckbox({handleChange}: useCheckboxType) {
  const [checkedState, setCheckedState] = useState<boolean>(false)
  function handleChecked(event: ChangeEvent<HTMLInputElement>) {
    setCheckedState(!checkedState)
    handleChange(event)
  }
  return {checkedState, handleChecked }
}