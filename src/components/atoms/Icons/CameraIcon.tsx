import { iconType } from '@/models/inconTypes'

export function CameraIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M480-300q59 0 99.5-40.5T620-440q0-59-40.5-99.5T480-580q-59 0-99.5 40.5T340-440q0 59 40.5 99.5T480-300Zm0-28q-48 0-80-32t-32-80q0-48 32-80t80-32q48 0 80 32t32 80q0 48-32 80t-80 32ZM192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l74-80h196l74 80h116q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-416q0-14-9-23t-23-9H640l-74-80H394l-74 80H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm288-240Z' />
    </svg>
  )
}
