import { iconType } from "@/models/inconTypes";


export function StarIcon({
    width = '1.2rem',
    height = '1.2rem',
    fill,
    variant = 'outlined'
}: iconType) {
    return (<>
      { variant === 'outlined' &&
        <svg xmlns='http://www.w3.org/2000/svg' height={height} width={width} viewBox='0 -960 960 960' >
          <path d='m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z' />
        </svg>
      }
        
      { variant === 'filled' &&
        <svg width={width} height={height} viewBox='0 0 21 21' fill={fill} xmlns='http://www.w3.org/2000/svg'>
          <path d='M10.5 16.5737L16.989 20.5L15.267 13.1L21 8.12105L13.4505 7.47895L10.5 0.5L7.5495 7.47895L0 8.12105L5.733 13.1L4.011 20.5L10.5 16.5737Z' />
        </svg>
      }

    </>)
}