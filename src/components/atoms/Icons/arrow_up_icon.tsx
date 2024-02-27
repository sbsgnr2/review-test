import { iconType } from '@/models/inconTypes'

export function ArrowUpIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='m280-400 200-200 200 200H280Z' />
    </svg>
  )
}
