import { iconType } from '@/models/inconTypes'

export function KeyIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M280-440q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440Zm0 148q-78 0-133-55T92-480q0-78 55-133t133-55q60 0 108 33.5t68 86.5h373l68 68-112 110-65-49-70 51-67-44H456q-20 52-68 86t-108 34Zm0-28q60 0 101.5-36t52.5-84h158l57 38 72-51 63 47 74-74-40-40H434q-11-48-52.5-84T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z' />
    </svg>
  )
}
