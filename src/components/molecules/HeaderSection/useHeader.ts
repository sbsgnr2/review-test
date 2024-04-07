import { useRouter } from "next/router"
import { useHeaderType } from "./headerType"

export function useHeader ({ href }: useHeaderType) {
  const router = useRouter()

  function handleClick() {
    href && router.push(href)
  }

  return { handleClick }
}