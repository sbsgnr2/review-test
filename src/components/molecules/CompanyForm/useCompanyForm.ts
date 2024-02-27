import { FormEvent, useRef } from "react"

export function useCompanyForm () {
  const refTags = useRef<string[]>([])

  function handleTags ({ tags }: { tags: string[] }) {
    refTags.current = tags
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { name, slug, description, monthLimit, companyImage } = Object.fromEntries(
      new window.FormData(event.currentTarget)
    )
    const tags = refTags.current
    // TODO
  }

  return { handleSubmit, handleTags }
}