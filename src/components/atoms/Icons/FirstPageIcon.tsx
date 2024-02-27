import { iconType } from '@/models/inconTypes'

export function FirstPageIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M266-266v-428h28v428h-28Zm414-10L476-480l204-204 20 20-184 184 184 184-20 20Z' />
    </svg>
  )
}
