import { extractGeoData } from "@/utils/functions/extractGeoData";
import { useEffect, useRef, useState } from "react"
import Geosuggest from "react-geosuggest"

export function useGeosuggestField ({ refLocationOption, resetSignal }: any) {
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<any>(null)
  const geosuggestRef = useRef<Geosuggest>(null);
  
  useEffect(() => {
    setSelectedOption(null)
    geosuggestRef?.current?.clear()
  },[resetSignal])
  
  function onSuggestSelect(suggest: any) {
    if (suggest) {
      const { postalCode, locality, region, country } = extractGeoData(suggest?.gmaps?.adr_address)
      setSelectedOption(
        { postalCode, locality, region, country, vicinity: suggest?.gmaps?.vicinity, location: suggest.description } || null
      )
      refLocationOption.current = { postalCode, locality, region, country, vicinity: suggest?.gmaps?.vicinity, location: suggest.description } || null
    } else {
      setSelectedOption(null)
      refLocationOption.current = null
    }
    setIsSuggestionsOpen(false)
  }

  function handleOpen (value: boolean) {
    setIsSuggestionsOpen(value)
  }

  function onChange() {
    setSelectedOption(null)
    setIsSuggestionsOpen(true)
  }

  return { handleOpen, onChange, onSuggestSelect, isSuggestionsOpen, selectedOption, geosuggestRef }
}
