import { iconType } from '@/models/inconTypes'

export function LastPageIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='m280-276-20-20 184-184-184-184 20-20 204 204-204 204Zm386 10v-428h28v428h-28Z' />
    </svg>
  )
}
