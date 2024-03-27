import { useStore } from "@/zustand/auth";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react"
import jwt from 'jsonwebtoken';
import { userLogin } from "@/services/api/users/login";

export function useLoginForm () {
  const router = useRouter();
  const { login, setUser } = useStore();
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string|null>(null)

  async function handleLogin({token}: { token: string }) {
    login(token)
    const decodedToken = jwt.decode(token)
    setUser(decodedToken)
    router.push('/')
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null) 
    const { email, password } = Object.fromEntries(new window.FormData(event.currentTarget)) as { email: string, password: string }

    setLoading(true)
    userLogin({ email, password })
      .then((response) => { 
        const {data} = response.data
        const token = data.token
        handleLogin({ token })
      })
      .catch((error) => { 
        const statusCode = error.response.status
        switch (statusCode) {
          case 400:
          case 401:
            setError('Invalid credentials')
            break;
          default:
            setError('Connection problems, try again later')
            break;
        }
      })
      .finally(() =>{
        setLoading(false)
      })
  }

  return { onSubmit, error, loading }
}