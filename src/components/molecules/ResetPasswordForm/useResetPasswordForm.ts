import { validatePassword, validatePasswords } from "@/utils/validations/password"
import { FormEvent, useState } from 'react'
import { Message } from '../Toast/toastType'
import { useStore } from '@/zustand/auth'
import { update } from '@/services/api/users/update'

export function useResetPasswordForm () {
  function validateRepeatPassword(repeatPassword: string) {
    const inputElement = document.getElementsByName('password')[0] as HTMLInputElement
    const password = inputElement.value
    const error = validatePasswords({ password, repeatPassword })
    return error
  }

  const [messages, setMessages] = useState<Message[] | null>(null)
  const [resetSignal, setResetSignal] = useState<boolean>(false)
  const { user }: any = useStore()

  function removeMessages(messageText: string) {
    const updatedMesages = messages?.filter((message) => message.text !== messageText)
    setMessages(updatedMesages || null)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { password, repeatPassword } = Object.fromEntries(
      new window.FormData(event.currentTarget)
    ) as { password: string; repeatPassword: string }

    const invalidPassword = validatePassword(password)
    const invalidRepeatPassword = validateRepeatPassword(repeatPassword)

    if (!invalidPassword && !invalidRepeatPassword) {
      const response = await update({ password, userId: user?.id }).catch((error) => {
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
        const form = event.target as HTMLFormElement
        form.reset()
        setResetSignal(!resetSignal)
        setMessages([{ type: 'success', text: 'Password successfully updated' }])
      }
    } else {
      if (invalidPassword) {
        setMessages([
          {
            type: 'error',
            text: 'The password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
          },
        ])
      } else {
        setMessages([{ type: 'error', text: 'Passwords must match' }])
      }
    }
  }

  return { validateRepeatPassword, removeMessages, handleSubmit, messages, resetSignal }
}