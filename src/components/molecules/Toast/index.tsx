import { Item } from './Item'
import { Message } from './toastType'
import styles from './Toast.module.css'

export function Toast({
  messages,
  removeMessages,
}: {
  messages: Message[] | null
  removeMessages: (messageText: string) => void
}) {
  return (
    <>
      {messages && (
        <div className={styles.toastContainer}>
          {messages?.map((message, index) => (
            <Item key={index} message={message} removeMessages={removeMessages} />
          ))}
        </div>
      )}
    </>
  )
}
