import { useStore } from '@/zustand/auth'
import { FormEvent, useRef, useState } from 'react'
import { upload } from '@/services/images/upload'
import { update } from '@/services/api/users/update'
import { validatePassword, validatePasswords } from '@/utils/validations/password'
import { useRouter } from 'next/router'

export function useActivateAccountForm ({ token, data }: { token: string, data: any }) {
  const { user, setUser }: any = useStore()
  const [messages, setMessages] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const refImg = useRef<any>(user?.image)
  const router = useRouter()

  function validateRepeatPassword(repeatPassword: string) {
    const inputElement = document.getElementsByName('password')[0] as HTMLInputElement
    const password = inputElement.value
    const error = validatePasswords({ password, repeatPassword })
    return error
  }

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
    const { name, surname, email, phone, userImage, password, repeatPassword } = Object.fromEntries(
      new window.FormData(event.currentTarget)
    ) as { name: string; surname: string; email: string; phone: string; userImage: any, password: string, repeatPassword: string }

    let image = undefined
    if (userImage?.name?.length > 0) {
      image = await upload({ image: userImage, folder: 'user' })
    }

    const payload = {
      name,
      surname,
      email: data.email,
      phone,
      image: image?.data?.data || refImg.current,
      password,
      isActive: 1,
      userId: data?.id,
      token
    }

    const invalidPassword = validatePassword(password)
    const invalidRepeatPassword = validateRepeatPassword(repeatPassword)

    if (!invalidPassword && !invalidRepeatPassword && name && surname) {
      const response: any = await update(payload)
      .catch((error) => {
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
        setTimeout(() => { router.push('/login') }, 1000)
      }
      setLoading(false)
    } else {
      const errorMessage = []
      if (!name) {
        errorMessage.push({ type: 'error', text: 'Complete a name field' })
      }
      if (!surname) {
        errorMessage.push({ type: 'error', text: 'Complete a surname field' })
      }
      if (invalidPassword) {
        errorMessage.push({ type: 'error', text: 'The password must contain at least one lowercase letter, one uppercase letter, one number, and one special character' })
      } else if (invalidRepeatPassword) {
        errorMessage.push({ type: 'error', text: 'Passwords must match' })
      }
      setMessages(errorMessage)
      setLoading(false)
    }
  }

  return { handleSubmit, handleImageRef, user, messages, removeMessages, loading }
}