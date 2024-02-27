import { iconType } from '@/models/inconTypes'

export function AlertIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M212-212v-28h60v-328q0-77 49.5-135T446-774v-20q0-14.167 9.882-24.083 9.883-9.917 24-9.917Q494-828 504-818.083q10 9.916 10 24.083v20q75 13 124.5 71T688-568v328h60v28H212Zm268-282Zm-.177 382Q455-112 437.5-129.625T420-172h120q0 25-17.677 42.5t-42.5 17.5ZM300-240h360v-328q0-75-52.5-127.5T480-748q-75 0-127.5 52.5T300-568v328Z' />
    </svg>
  )
}
