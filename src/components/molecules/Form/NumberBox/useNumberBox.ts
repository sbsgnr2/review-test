import { FocusEvent, useState } from 'react'
import { numberInputHookType } from './numberBoxType'

export function useNumberBox ({ value, onBlur }: numberInputHookType) {
  const [focused, setFocused] = useState(false)

  function handleFocus() {
    setFocused(true)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    if (!value) {
      setFocused(false)
    }
    onBlur && onBlur(event)
  }

  return { focused, handleFocus, handleBlur }
}