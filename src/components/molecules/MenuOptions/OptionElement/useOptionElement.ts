import { useRouter } from "next/router"

export function useOptionElement ({ urlLink }: { urlLink: string }) {
  const router = useRouter()
  const currentPath = router.pathname
  const linkClass = currentPath === urlLink ? 'var(--focused-color)' : 'inherit'
  return { linkClass }
}