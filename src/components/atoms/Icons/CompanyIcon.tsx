import { iconType } from '@/models/inconTypes'

export function CompanyIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M172-172v-432l428-165v341h76q0-23.1 16.429-39.55 16.429-16.45 39.5-16.45t39.571 16.45Q788-451.1 788-428v256H172Zm28-28h212v-228h160v-301L200-585v385Zm240 0h132v-84h56v84h132v-200H440v200Zm-56-256Zm216 256Zm0-28Z' />
    </svg>
  )
}
