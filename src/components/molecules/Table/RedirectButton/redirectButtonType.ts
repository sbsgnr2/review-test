export interface redirectButtonType {
  element: string
  redirect: ({ href }: { href: string }) => void
}
