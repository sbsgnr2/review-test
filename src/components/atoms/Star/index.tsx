import { StarType } from './StarType'

export function Star({ filled, halfFilled, width = '12px', height = '12px' }: StarType) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={width}
      height={height}
      fill={filled && !halfFilled ? 'orange' : 'none'}
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path
        d='M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 Z'
        fill={filled && !halfFilled ? 'orange' : 'none'}
        stroke={filled || halfFilled ? 'none' : 'orange'}
      />
      {halfFilled && (
        <path
          d='M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 Z'
          fill='orange'
          stroke='none'
          clipPath='url(#clip)'
        />
      )}
      <clipPath id='clip'>
        <rect x='0' y='0' width='12' height='24' />
      </clipPath>
    </svg>
  )
}
