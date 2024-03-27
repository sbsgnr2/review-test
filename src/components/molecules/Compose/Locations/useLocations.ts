import { useState } from "react"

export function useLocations () {
  const [viewLocations, setViewLocations] = useState<boolean>(false)
  function handleViewLocations() {
    setViewLocations(!viewLocations)
  }
  return { handleViewLocations, viewLocations }
}