import { useHandleOpen } from "@/hooks/useHandleOpen"
import { SelectInputHookType } from "./SelectInputType"

export function useSelectInput({ onChange }: SelectInputHookType) {
  const { isOpen, handleClose, handleToggle } = useHandleOpen({})

  function handleSelect({
    selectedValue,
    closeOnSelect = true
  }: {
    selectedValue: string,
    closeOnSelect?: boolean
  }) {
    if (closeOnSelect)
      handleClose()
    onChange(selectedValue)
  }

  return { isOpen, handleToggle, handleSelect }
}