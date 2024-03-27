import { handleNumberType } from "@/components/molecules/Form/NumberBox/numberBoxType"
import { ChangeEvent } from "react"

export function useHandleNumber ({ value, changeValue, handleError, min = 0 }: handleNumberType) {
  function setValue ({ newValue } : { newValue: number }) {
    if (!isNaN(Number(newValue))) {
      changeValue({ value: newValue })
      handleError(newValue)
    } else {
      changeValue({ value: 0})
      handleError(0)
    }
  }

  function handleIncrement() {
    const newValue = value + 1
    setValue({ newValue })
  }

  function handleDecrement() {
    const newValue = value - 1
    if (newValue >= min) {
      setValue({ newValue })
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value)
    setValue({ newValue })
  }

  return { handleIncrement, handleDecrement, handleChange }
}