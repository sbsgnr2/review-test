import { iconType } from '@/models/inconTypes'

export function FileDownloadIcon({ width = '1.2rem', height = '1.2rem' }: iconType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={height} viewBox='0 -960 960 960' width={width}>
      <path d='M720-148.461 851.539-280 824-307.539l-84 84V-419h-40v195.461l-84-84L588.461-280 720-148.461ZM580-20v-40h280v40H580ZM244.615-180q-26.077 0-45.346-19.269Q180-218.538 180-244.615v-550.77q0-26.077 19.269-45.346Q218.538-860 244.615-860H520l220 220v125.615h-40V-620H500v-200H244.615q-9.23 0-16.923 7.692Q220-804.615 220-795.385v550.77q0 9.23 7.692 16.923Q235.385-220 244.615-220h240v40h-240ZM220-220v-600 600Z' />
    </svg>
  )
}
