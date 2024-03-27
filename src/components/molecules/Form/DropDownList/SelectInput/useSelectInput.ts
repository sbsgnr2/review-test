import { useHandleOpen } from "@/hooks/useHandleOpen"
import { SelectInputHookType } from "./SelectInputType"
import { useOutsideClick } from "@/hooks/useOutsideClick"

export function useSelectInput({ onChange }: SelectInputHookType) {
  const { isOpen, handleClose, handleToggle } = useHandleOpen({})
  const { ref } = useOutsideClick({handleClose})

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

  return { isOpen, handleToggle, handleSelect, ref }
}