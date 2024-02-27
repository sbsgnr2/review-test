import { iconType } from '@/models/inconTypes'

export function ProfileIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M192-132q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h220v-172q0-12 8-20t20-8h80q12 0 20 8t8 20v172h220q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-376q0-14-9-23t-23-9H548v40q0 11-8.5 19.5T520-532h-80q-11 0-19.5-8.5T412-560v-40H192q-14 0-23 9t-9 23v376q0 14 9 23t23 9Zm64-110h208v-2q0-13-7-23.5T438-312q-19-8-38.5-12t-39.5-4q-20 0-39.5 4T282-312q-12 6-19 16.5t-7 23.5v2Zm304-62h160v-28H560v28Zm-200-28q18 0 31-13t13-31q0-18-13-31t-31-13q-18 0-31 13t-13 31q0 18 13 31t31 13Zm200-60h160v-28H560v28ZM440-560h80v-240h-80v240Zm40 180Z' />
    </svg>
  )
}
