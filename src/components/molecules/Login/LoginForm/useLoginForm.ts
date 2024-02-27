import { FormEvent } from "react"

export function useLoginForm () {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { email, password } = Object.fromEntries(new window.FormData(event.currentTarget))
    // TODO
  }
  return { onSubmit }
}