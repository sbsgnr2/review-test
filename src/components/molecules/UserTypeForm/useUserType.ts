import { FormEvent } from "react"

export function useUserType () {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { name } = Object.fromEntries(
      new window.FormData(event.currentTarget)
    )

    // TODO
  }

  return {handleSubmit}
}