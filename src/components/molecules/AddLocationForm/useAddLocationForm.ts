import { FormEvent, useRef } from "react"

export function useAddLocationForm () {
  const refTags = useRef<string[]>([])
  const selectedCompanyRef = useRef<string>('');

  function handleCompany(selectedValue: string) {
    selectedCompanyRef.current = selectedValue;
  }

  function handleTags ({ tags }: { tags: string[] }) {
    refTags.current = tags
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { name, slug, description, smsMonthlyLimit, logo } = Object.fromEntries(
      new window.FormData(event.currentTarget)
    )
    const tags = refTags.current
    const company = selectedCompanyRef.current
    
    // TODO
  }

  return { handleSubmit, handleTags, handleCompany }
}