import { iconType } from '@/models/inconTypes'

export function ForumIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M292-332q-11.9 0-19.95-8.05Q264-348.1 264-360v-28h455l33 33v-365h28q11.9 0 19.95 8.05Q808-703.9 808-692v472L696-332H292Zm-140-24v-444q0-11.9 8.05-19.95Q168.1-828 180-828h464q11.9 0 19.95 8.05Q672-811.9 672-800v304q0 11.9-8.05 19.95Q655.9-468 644-468H264L152-356Zm492-140v-304H180v376l72-72h392Zm-464 0v-304 304Z' />
    </svg>
  )
}
