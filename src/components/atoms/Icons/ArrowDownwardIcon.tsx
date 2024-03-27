import { iconType } from '@/models/inconTypes'

export function ArrowDownwardIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z' />
    </svg>
  )
}
