import { iconType } from '@/models/inconTypes'

export function HomeIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M236-212v-361l-127 94-17-22 388-287 178 131v-91h62v137l149 110-17 22-127-94v361H532v-200H428v200H236Zm28-28h136v-200h160v200h137v-353L480-753 264-593v353Zm146-320h140q0-27-21-44.5T480-622q-28 0-49 17.411T410-560Zm-10 320v-200h160v200-200H400v200Z' />
    </svg>
  )
}
