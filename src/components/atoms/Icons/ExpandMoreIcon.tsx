import { iconType } from '@/models/inconTypes'

export function ExpandMoreIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z' />
    </svg>
  )
}
