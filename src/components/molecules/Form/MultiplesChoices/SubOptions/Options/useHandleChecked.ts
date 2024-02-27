export function useHandleChecked ({ handleChange }: { handleChange: ({ value }: { value: string }) => void }) {
  function handleChecked({ value }: { value: string }) {
    handleChange({ value })
  }
  return { handleChecked }
}