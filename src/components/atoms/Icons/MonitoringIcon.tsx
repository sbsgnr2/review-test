import { iconType } from '@/models/inconTypes'

export function MonitoringIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M146-146v-43l28-28v71h-28Zm160 0v-203l28-28v231h-28Zm160 0v-231l28 29v202h-28Zm160 0v-202l28-28v230h-28Zm160 0v-363l28-28v391h-28ZM146-390v-39l254-254 160 160 254-254v39L560-484 400-644 146-390Z' />
    </svg>
  )
}
