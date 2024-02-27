import { useRouter } from "next/router"
import { useCardButtonType } from "./cardButtonType"

export function useCardButton ({ href }: useCardButtonType) {
  const router = useRouter()

  function handleClick(_event: React.MouseEvent<HTMLButtonElement>) {
    router.push(href)
  }

  return { handleClick }
}