import { useRef } from "react"
import { useHandleMCType } from "./useHandleMCType";

export function useHandleMC ({ handleChange }: useHandleMCType) {
  const selectedElementsRef = useRef<string[]>([]);
  function handleSelecteds({ value }: { value: string }) {
    if (selectedElementsRef.current.includes(value)) {
      selectedElementsRef.current = selectedElementsRef.current.filter((item) => item !== value)
      handleChange({
        value: selectedElementsRef.current.filter((item) => item !== value),
      })
    } else {
      handleChange({ value: [...selectedElementsRef.current, value] })
      selectedElementsRef.current = [...selectedElementsRef.current, value]
    }
  }

  return { handleSelecteds }
}