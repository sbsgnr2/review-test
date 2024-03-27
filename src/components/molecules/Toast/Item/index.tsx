import { useEffect } from 'react'
import { Message } from '../toastType'
import styles from './Item.module.css'
import { CloseIcon } from '@/components/atoms/Icons/CloseIcon'
import { IconButton } from '../../Form/Button/IconButton'

export function Item({
  message,
  removeMessages,
}: {
  message: Message
  removeMessages: (messageText: string) => void
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeMessages(message.text)
    }, 8000)

    return () => clearTimeout(timer)
  }, [message.text, removeMessages])

  return (
    <div
      className={`${styles.toast} ${styles.toastVisible}`}
      style={{ backgroundColor: message.type === 'error' ? '#d32f2f' : '#43a047' }}
    >
      <div className={styles.toastMessage}>
        <div className={styles.top}>
          <p>{message.type}</p>
          <IconButton
            type='button'
            variant='text'
            height='1rem'
            width='max-content'
            onClick={() => removeMessages(message.text)}
          >
            <span>
              <CloseIcon />
            </span>
          </IconButton>
        </div>
        <p>{message.text}</p>
      </div>
    </div>
  )
}
