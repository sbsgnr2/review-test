import { useFocusBox } from "@/hooks/useFocusBox"
import { useHandleNumber } from "@/hooks/useHandleNumber"
import { useNumberInputType } from "./numberInputType"
import { useState } from "react"

export function useNumberInput ({ value, validationFunction, changeValue } : useNumberInputType) {
  const { focused, handleFocus, handleBlur, error, handleError } = useFocusBox({ value, validationFunction })
  const [inputValue, setInputValue] = useState<number>(value || 0)

  function handleChangeValue({value}: {value: number}) {
    setInputValue(value)
    changeValue({value})
  }

  const { handleIncrement, handleDecrement, handleChange } = useHandleNumber({ value: inputValue, changeValue: handleChangeValue, handleError })

  return { handleFocus, handleBlur, handleIncrement, handleDecrement, handleChange, inputValue, focused, error }
}
