import { useState } from "react"

export function useHandleOpen ({initialValue = false}:{initialValue?: boolean}) {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue)

  function handleOpen(): void {
    setIsOpen(true)
  }

  function handleClose(): void {
    setIsOpen(false)
  }

  function handleToggle(): void {
    setIsOpen(!isOpen)
  }

  return { isOpen, handleOpen, handleClose, handleToggle }
}