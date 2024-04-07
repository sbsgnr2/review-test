import { OpenViewIcon } from '@/components/atoms/Icons/OpenViewIcon'
import { IconButton } from '../../Form/Button/IconButton'
import { redirectButtonType } from './redirectButtonType'

export function RedirectButton({ element, redirect }: redirectButtonType) {
  return (
    <IconButton
      variant='contained'
      width='max-content'
      padding='0 1rem'
      ariaLabel='Redirect'
      onClick={() => element && redirect({ href: element as string })}
    >
      <OpenViewIcon />
      <p style={{ marginLeft: '0.3rem' }}>View Source</p>
    </IconButton>
  )
}
