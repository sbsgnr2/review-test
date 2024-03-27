import { useState } from "react"

export function useFirstColumn () {
  const [search, setSearch] = useState<string>('')

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }
  
  return { search, handleSearch }
}