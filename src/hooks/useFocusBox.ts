import { textBookHookType } from '@/models/textBookHookType'
import { FocusEvent, useState } from 'react'

export function useFocusBox ({ value, validationFunction }: textBookHookType) {
  const [focused, setFocused] = useState(false)
  const [error, setError] = useState<string|null>(null)

  function handleFocus() {
    setFocused(true)
  }

  async function handleError (inputValue: string) {
    const errorFound = await validationFunction(inputValue)
    setError(errorFound)
  }

  async function handleBlur(event: FocusEvent<HTMLInputElement|HTMLTextAreaElement>) {
    if (!value) {
      setFocused(false)
    }
    const inputValue = event.target.value
    handleError(inputValue)
  }

  return { focused, handleFocus, handleBlur, handleError, error }
}