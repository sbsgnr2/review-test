import { iconType } from '@/models/inconTypes'

export function SwitchLeft({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M400-200 120-480l280-280v560Zm-60-145v-270L205-480l135 135Zm220 145v-560l280 280-280 280Z' />
    </svg>
  )
}
