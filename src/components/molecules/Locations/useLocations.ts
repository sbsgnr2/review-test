import { useRouter } from "next/router"

export function useLocation () {
  const router = useRouter()
  function redirection() {
    router.push('/settings/users/add-user/finish')
  }

  return { redirection }
}