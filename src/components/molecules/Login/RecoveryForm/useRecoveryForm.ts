import { FormEvent } from 'react'

export function useRecoveryForm () {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { email } = Object.fromEntries(new window.FormData(event.currentTarget))
    // TODO
  }

  return { onSubmit }
}