import { useState } from "react"

export function useBodyForm () {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true)

  function handleForm() {
    setIsLoginForm(!isLoginForm)
  }
  
  return { isLoginForm, handleForm }
}