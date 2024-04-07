export interface redirectButtonType {
  element: string | null
  redirect: ({ href }: { href: string }) => void
}
