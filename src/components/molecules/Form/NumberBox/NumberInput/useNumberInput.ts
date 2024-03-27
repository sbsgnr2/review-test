import { useFocusBox } from "@/hooks/useFocusBox"
import { useHandleNumber } from "@/hooks/useHandleNumber"
import { useNumberInputType } from "./numberInputType"
import { useEffect, useState } from "react"

export function useNumberInput ({ value, validationFunction, changeValue, resetSignal, min = 0 } : useNumberInputType) {
  const { focused, handleFocus, handleBlur, error, handleError } = useFocusBox({ value, validationFunction })
  const [inputValue, setInputValue] = useState<number>(value || 0)

  useEffect(() => {
    setInputValue(value || 0)
  }, [resetSignal, value])

  function handleChangeValue({value}: {value: number}) {
    setInputValue(value)
    changeValue({value})
  }

  const { handleIncrement, handleDecrement, handleChange } = useHandleNumber({ value: inputValue, changeValue: handleChangeValue, handleError, min })

  return { handleFocus, handleBlur, handleIncrement, handleDecrement, handleChange, inputValue, focused, error }
}
