import { useHandleOpen } from "@/hooks/useHandleOpen"
import { useEffect, useRef, useState } from "react"

export function useSearchSelect () {
  const { isOpen, handleClose, handleOpen } = useHandleOpen({})
  const [select, setSelect] = useState<string|null>(null)
  const [search, setSearch] = useState<string>('')
  const contenedorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (contenedorRef.current && !contenedorRef.current?.contains(event.target)) {
        handleClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClose])

  function handleChange(event: any) {
    setSearch(event.target.value)
    if (event.target.value.length > 0) {
      handleOpen()
    } else {
      handleClose()
    }
  }

  function handleSelect ({option}:{option: { label: string, value: string }}) {
    setSelect(option.value)
    setSearch(option.label)
    handleClose()
  }

  return { isOpen, handleChange, contenedorRef, handleOpen, handleSelect, select, search }
}