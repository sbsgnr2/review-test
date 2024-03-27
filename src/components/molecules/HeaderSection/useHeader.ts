import { useCompanies } from "@/zustand/companies"
import { useRouter } from "next/router"

export function useHeader ({ href }: { href?: string }) {
  const router = useRouter()
  const { getTotal } = useCompanies()

  function handleClick() {
    href && router.push(href)
  }
  return { handleClick, getTotal }
}