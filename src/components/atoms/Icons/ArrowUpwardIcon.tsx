import { iconType } from '@/models/inconTypes'

export function ArrowUpwardIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z' />
    </svg>
  )
}
