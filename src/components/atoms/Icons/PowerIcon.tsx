import { iconType } from '@/models/inconTypes'

export function PowerIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M466-440v-356h28v356h-28Zm14 268q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-69 30-130.5T284-716l19 19q-49 39-76 96t-27 121q0 116 82 198t198 82q117 0 198.5-82T760-480q0-64-26.5-121T657-697l19-19q53 44 82.5 105.5T788-480q0 64-24 120t-66 98q-42 42-98 66t-120 24Z' />
    </svg>
  )
}
