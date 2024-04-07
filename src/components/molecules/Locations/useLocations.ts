import { useUser } from "@/zustand/user"
import { useRef, useState } from "react"
import { Message } from "../Toast/toastType"

export function useLocation ({ handleStep }: { handleStep: ( num: number ) => void}) {
  const { setUser, user } = useUser()
  const [messages, setMessages] = useState<Message[]|null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const locationsRef = useRef<string[]>(user?.locations || [])
  function handleChange(values: string[]) {
    locationsRef.current = values
  }

  function handleSubmit () {
    setLoading(true)
    if (locationsRef.current?.length > 0){
      setLoading(false)
      setUser({ ...user, locations: locationsRef.current })
      handleStep(3)
    } else {
      setLoading(false)
      setMessages([{ type: 'error', text: 'You should select at least one location' }])
    }
  }

  function handleBack () {
    handleStep(1)
  }

  function removeMessages (messageText: string) {
    const updatedMesages = messages?.filter(message => message.text !== messageText);
    setMessages(updatedMesages || null)
  }

  return { locationsRef, handleChange, handleSubmit, handleBack, user, messages, removeMessages, loading }
}