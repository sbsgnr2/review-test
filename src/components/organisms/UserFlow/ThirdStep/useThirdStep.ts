import { useState } from 'react'
import { validateThirdStep } from '@/utils/validations/user/thirdStep'
import { create } from '@/services/api/users/create'
import { assignLocations } from '@/services/api/users/assignLocations'
import { useUser } from '@/zustand/user'

export function useThirdStep ({ handleStep }: { handleStep: (num: number) => void}) {
  const [messages, setMessages] = useState<any[] | null>(null)
  const checkedArr = [
    {
      title: 'Create Profile',
      label: 1,
      completed: true,
      actual: false,
    },
    {
      title: 'Locations',
      label: 2,
      completed: true,
      actual: false,
    },
    {
      title: 'Finish',
      label: 3,
      completed: false,
      actual: true,
    },
  ]
  const { user, setUser } = useUser()

  function removeMessages(messageText: string) {
    const updatedMesages = messages?.filter((message) => message.text !== messageText)
    setMessages(updatedMesages || null)
  }

  function handleBack() {
    handleStep(2)
  }

  async function handleSubmit() {
    const { email, locations, message, name, phone, singleUser, subject, surname, tags, userType } =
      user
    const payload = {
      email,
      locations: locations?.map((location: string) => {
        return parseInt(location)
      }),
      message,
      name,
      phone,
      singleUser,
      subject,
      surname,
      tags: tags.length ? JSON.stringify(tags) : null,
      type: userType,
    }

    let errors: any = validateThirdStep({ name, surname, email, userType, locations })

    if (errors?.length > 0) {
      setMessages(
        errors?.map((error: string) => {
          return { type: 'error', text: error }
        })
      )
    }

    const response: any = await create(payload)
      .then(async (response) => {
        if (response?.data?.data?.tokenClaims?.id) {
          const assignLocationsPayload = {
            locationIds: locations?.map((location: string) => {
              return parseInt(location)
            }),
            userId: response?.data?.data?.tokenClaims?.id,
          }
          await assignLocations(assignLocationsPayload)
          .then((resp) => {
            if (resp?.status === 201 || resp?.status === 200) {
              setMessages([{ type: 'success', text: 'User successfully created' }])
              setUser({})
              setTimeout(() => handleStep(1), 1000)
            }
          })
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
                  {
                    type: 'error',
                    text:
                      error.response?.data?.message ||
                      'Make sure you fill out all fields with valid values',
                  },
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
        }
      })
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
              {
                type: 'error',
                text:
                  error.response?.data?.message ||
                  'Make sure you fill out all fields with valid values',
              },
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
  }

  return { removeMessages, checkedArr, handleBack, handleSubmit, user, messages  }
}