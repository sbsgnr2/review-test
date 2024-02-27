import { iconType } from '@/models/inconTypes'

export function ChevronRightIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z' />
    </svg>
  )
}
