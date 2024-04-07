import { useHandleOpen } from "@/hooks/useHandleOpen";
import { multEmailValidator } from "@/utils/validations/multEmailsValidator"
import { useUser } from "@/zustand/user";
import { FormEvent, useEffect, useRef, useState } from "react"
import { Message } from "../Toast/toastType";
import { validateFirstStep } from "@/utils/validations/user/fistStep";
import { validateUserEmail } from "@/utils/validations/user/email";

export function useAddUser ({ handleStep } : { handleStep: (num: number) => void }) {
  const { isOpen, handleOpen, handleClose } = useHandleOpen({ initialValue: true })
  const selectedTypeRef = useRef<string|undefined>(undefined);
  const selectedCustomPermRef = useRef<string[]>([]);
  const refTags = useRef<string[]>([])
  const [messages, setMessages] = useState<Message[]|null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { setUser, user } = useUser()

  useEffect(() => {
    selectedTypeRef.current = user?.userType
    refTags.current = user?.tags || []
  }, [user])

  function handleTags ({ tags }: { tags: string[] }) {
    refTags.current = tags
  }

  function mailsValidator(value: string) {
    return multEmailValidator({ emails: value })
  }

  function handleUserType(selectedValue: string) {
    selectedTypeRef.current = selectedValue;
  }

  function handleChangeCustomPermission({ value }: { value: string[] }) {
    selectedCustomPermRef.current = value;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    const { subject, message, name, surname, email, phone } = Object.fromEntries(
      new window.FormData(event.currentTarget)
    ) as { subject: string, message: string, name: string, surname: string, email: string, phone: string}
    
    const userType = selectedTypeRef.current
    const userPermission = selectedCustomPermRef.current
    const tags = refTags.current
    
    let errors: any = validateFirstStep({ name, surname, userType: userType? parseInt(userType) : null, email })

    if (errors?.length > 0) {
      setMessages(errors?.map((error: string) => { return { type: 'error', text: error }}))
      setLoading(false)
    } else {
      const exist = await validateUserEmail(email)
      if (exist) {
        setMessages([{ type: 'error', text: 'The email address is already in use' }])
        setLoading(false)
      } else {
        if (isOpen && userType&& email) {
          setLoading(false)
          setUser({
            ...user,
            singleUser: isOpen,
            name,
            surname,
            email,
            phone,
            subject,
            message,
            tags,
            userType: parseInt(userType),
          })
          handleStep(2)
        }
      }
    }
  }

  function removeMessages (messageText: string) {
    const updatedMesages = messages?.filter(message => message.text !== messageText);
    setMessages(updatedMesages || null)
  }

  return { 
    handleSubmit, 
    mailsValidator, 
    handleUserType, 
    handleChangeCustomPermission,
    handleTags,
    isOpen, 
    handleOpen, 
    handleClose,
    messages,
    removeMessages,
    user,
    loading
  }
}