import { FormEvent, useRef, useState } from "react"
import { create } from "@/services/api/locations/create"
import { Message } from "../Toast/toastType";
import { validateCreateLocation } from "@/utils/validations/location/createLocation";
import { useCompanies } from "@/zustand/companies";
import useSWR from "swr";
import { validateLocationSlug } from "@/utils/validations/location/slug";
import { useLocations } from "@/zustand/locations";

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    switch (res.status) {
      case 401:
        window.location.href = '/login'
        break;
      default:
        throw new Error('No Data')
    }
  }
  return res.json()
}

export function useAddLocationForm () {
  const refTags = useRef<string[]>([])
  const refLocationOption = useRef<any>(null)
  const [resetSignal, setResetSignal] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]|null>(null)
  const selectedCompanyRef = useRef<string>('');

  const GET_ALL_URL = `/api/companies/getCompanies?page=0&pageSize=5`
  const { setCompanies } = useCompanies()
  const { setTotal, total } = useLocations()

  const { data } = useSWR(
    GET_ALL_URL,
    fetcher,
    {
      refreshInterval: 2000,
      onSuccess: () => {
        if (data) {
          setCompanies(data)
        }
      }
    },
  )

  function removeMessages (messageText: string) {
    const updatedMesages = messages?.filter(message => message.text !== messageText);
    setMessages(updatedMesages || null)
  }

  function handleCompany(selectedValue: string) {
    selectedCompanyRef.current = selectedValue;
  }

  function handleTags ({ tags }: { tags: string[] }) {
    refTags.current = tags
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    const { name, slug } = Object.fromEntries(
      new window.FormData(event.currentTarget)
    ) as { name: string, slug: string }
    const tags = refTags.current
    const company = selectedCompanyRef.current

    const { postalCode, locality, region, country, location, vicinity } = refLocationOption?.current || {};
    
    let errors: any = validateCreateLocation({ name, slug, company: parseInt(company), tags, location })

    if (errors) {
      const errorSlug: string | null = await validateLocationSlug(slug)
      if (errorSlug) {
        errors === true? errors = [errorSlug] : errors?.push(errorSlug)
      }
    }

    if (errors?.length > 0) {
      setMessages(errors?.map((error: string) => { return { type: 'error', text: error }}))
      setLoading(false)
    } else {
      const payload = { 
        name, 
        slug, 
        tags: tags.length ? JSON.stringify(tags) : null,  
        accountId: parseInt(company),
        location,
        address: vicinity,
        country,
        city: locality,
        region,
        zip: postalCode
      }
      const response = await create(payload).catch((error) => {
        switch (error.response?.status) {
          case 406:
            setMessages([{type: 'error', text: error.response?.data?.message || 'Make sure you fill out all fields with valid values'}])
            break;
          case 400:
            setMessages([{type: 'error', text: error.response?.data?.message || 'Make sure you fill out all fields with valid values'}])
            break;
          case 401:
            window.location.href = '/login'
            break;
          default:
            setMessages([{type: 'error', text: 'unhandled error'}])
            break;
        }
      })
      if (response?.status === 201 || response?.status === 200) {
        const form = event.target as HTMLFormElement
        form.reset()
        setTotal(total + 1)
        setResetSignal(!resetSignal)
        setMessages([{type: 'success', text: 'Company successfully created'}])
      }
      setLoading(false)
    }
  }

  return { 
    handleSubmit, 
    handleTags, 
    handleCompany, 
    messages,
    removeMessages, 
    loading, 
    resetSignal,
    data: data?.data?.map((element: any) => { return { value: element.id, label: element.name }}) || [],
    refLocationOption
  }
}