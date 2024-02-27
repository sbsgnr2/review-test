import { useFocusBox } from '@/hooks/useFocusBox'
import { ChangeEvent, useState } from 'react'
import { useTextAreaType } from './TextAreaType'

export function useTextArea ({changeValue, value, validationFunction}: useTextAreaType) {  
  const { focused, handleFocus, handleBlur, error } = useFocusBox({ value, validationFunction })
  const [inputValue, setInputValue] = useState<string | number>(value || '')

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(event.target.value)
    changeValue(event)
  }
  
  return {focused, handleFocus, handleBlur, inputValue, handleChange, error}
}