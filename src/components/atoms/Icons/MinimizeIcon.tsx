import { iconType } from '@/models/inconTypes'

export function MinimizeIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M240-120v-80h480v80H240Z' />
    </svg>
  )
}
