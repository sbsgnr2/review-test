import { useBodyType } from "./bodyType"

export function useBody ({header}: useBodyType) {
  const fields: string[] = header?.map((row) => row.field)

  function redirect({ href }: { href: string }) {
    if (href) {
      window.location.href = href
    }
  }

  return { fields, redirect }
}