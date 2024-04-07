import { useFocusBox } from '@/hooks/useFocusBox'
import { ChangeEvent, useEffect, useState } from 'react'
import { useTextBoxType } from './textBoxType'

export function useTextBox ({ changeValue, value, validationFunction, resetSignal }: useTextBoxType) {  
  const { focused, handleFocus, handleBlur, error } = useFocusBox({ value, validationFunction })
  const [inputValue, setInputValue] = useState<string | number>(value || '')

  useEffect(() => {setInputValue(value || '')},[value, resetSignal])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
    changeValue(event)
  }
  
  return {focused, handleFocus, handleBlur, inputValue, handleChange, error}
}