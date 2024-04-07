import { useStore } from '@/zustand/auth'
import { FormEvent, useRef, useState } from 'react'
import { upload } from '@/services/images/upload'
import { update } from '@/services/api/users/update'
import { Message } from '../Toast/toastType'

export function useProfileForm () {
  const { user, setUser }: any = useStore()
  const [messages, setMessages] = useState<Message[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const refImg = useRef<any>(user?.image)

  function removeMessages(messageText: string) {
    const updatedMesages = messages?.filter((message) => message.text !== messageText)
    setMessages(updatedMesages || null)
  }

  function handleImageRef(value: string | undefined | null) {
    refImg.current = value
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const { name, surname, email, phone, userImage } = Object.fromEntries(
      new window.FormData(event.currentTarget)
    ) as { name: string; surname: string; email: string; phone: string; userImage: any }

    let image = undefined
    if (userImage?.name?.length > 0) {
      image = await upload({ image: userImage, folder: 'user' })
    }

    const payload = {
      name,
      surname,
      email,
      phone,
      image: image?.data?.data || refImg.current,
      userId: user?.id,
    }

    const response = await update(payload).catch((error) => {
      switch (error.response?.status) {
        case 406:
          setMessages([
            {
              type: 'error',
              text:
                error.response?.data?.message ||
                'Make sure you fill out all fields with valid values',
            },
          ])
          break
        case 400:
          setMessages([
            { type: 'error', text: 'Make sure you fill out all fields with valid values' },
          ])
          break
        case 401:
          window.location.href = '/login'
          break
        default:
          setMessages([{ type: 'error', text: 'unhandled error' }])
          break
      }
    })
    if (response?.status === 201 || response?.status === 200) {
      setUser(response?.data?.data)
      setMessages([{ type: 'success', text: 'User successfully updated' }])
    }

    setLoading(false)
  }

  return { handleSubmit, handleImageRef, user, messages, removeMessages, loading }
}