import { iconType } from '@/models/inconTypes'

export function ArrowDownIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M480-360 280-560h400L480-360Z' />
    </svg>
  )
}
