import { iconType } from '@/models/inconTypes'

export function DoneIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M382-276 192-466l20-20 170 170 366-366 20 20-386 386Z' />
    </svg>
  )
}
