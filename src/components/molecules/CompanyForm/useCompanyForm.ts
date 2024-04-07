import { create } from "@/services/api/companies/create"
import { upload } from "@/services/images/upload"
import { validateCreateCompany } from "@/utils/validations/company/createCompany"
import { validateCompanySlug } from "@/utils/validations/company/slug"
import { FormEvent, useRef, useState } from "react"
import { Message } from "../Toast/toastType"

export function useCompanyForm () {
  const refTags = useRef<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]|null>(null)
  const [resetSignal, setResetSignal] = useState<boolean>(false)

  function removeMessages (messageText: string) {
    const updatedMesages = messages?.filter(message => message.text !== messageText);
    setMessages(updatedMesages || null)
  }

  function handleTags ({ tags }: { tags: string[] }) {
    refTags.current = tags
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    const { name, slug, description, smsMonthlyLimit, logo } = Object.fromEntries(new window.FormData(event.currentTarget)) as { name: string, slug: string, description: string, smsMonthlyLimit: string, logo: any }
    const tags = refTags.current
    
    let errors: any = validateCreateCompany({ name, slug, description, smsMonthlyLimit: parseInt(smsMonthlyLimit), tags })
    if (errors) {
      const errorSlug: string | null = await validateCompanySlug(slug)
      if (errorSlug) {
        errors.push(errorSlug)
      }
    }

    if (errors?.length > 0) {
      setMessages(errors?.map((error: string) => { return { type: 'error', text: error }}))
      setLoading(false)
    } else {
      let image = undefined
      if (logo?.name?.length > 0) {
        image = await upload({ image: logo, folder: 'company' })
      }

      const payload = { 
        name, 
        slug, 
        description, 
        smsMonthlyLimit: parseInt(smsMonthlyLimit), 
        tags: tags.length ? JSON.stringify(tags) : null, 
        logo: image?.data?.data 
      }

      const response = await create(payload).catch((error) => {
        switch (error.response?.status) {
          case 406:
            setMessages([{type: 'error', text: error.response?.data?.message || 'Make sure you fill out all fields with valid values'}])
            break;
          case 400:
            setMessages([{type: 'error', text: 'Make sure you fill out all fields with valid values'}])
            break;
          case 401:
            window.location.href = '/login'
            break;
          default:
            setMessages([{type: 'error', text: 'unhandled error'}])
            break;
        }
      })
      if (response?.status === 201) {
        const form = event.target as HTMLFormElement
        form.reset()
        setResetSignal(!resetSignal)
        setMessages([{type: 'success', text: 'Company successfully created'}])
      }
      setLoading(false)
    }
  }

  return { handleSubmit, handleTags, messages, loading, removeMessages, resetSignal }
}