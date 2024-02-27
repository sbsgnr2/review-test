import { useState } from "react"

export function useSelect () {
  const [selectedOption, setSelectedOption] = useState<string>('User Info')
  const options = ['User Info', 'Password']
  function handleSelected(option: string) {
    setSelectedOption(option)
  }
  return { selectedOption, options, handleSelected}
}