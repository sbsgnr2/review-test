import { useRouter } from "next/router"

export function useHeader ({ href }: { href: string }) {
  const router = useRouter()
  function handleClick() {
    router.push(href)
  }
  return { handleClick }
}