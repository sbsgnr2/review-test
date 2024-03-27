import { useHandleOpen } from "@/hooks/useHandleOpen";
import { multEmailValidator } from "@/utils/validations/multEmailsValidator"
import { useRouter } from "next/router";
import { FormEvent, useRef } from "react"

export function useAddUser () {
  const { isOpen, handleOpen, handleClose } = useHandleOpen({ initialValue: true })
  const selectedTypeRef = useRef<string>('');
  const selectedCustomPermRef = useRef<string[]>([]);
  const refTags = useRef<string[]>([])
  const router = useRouter()

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { emails, subject, message } = Object.fromEntries(
      new window.FormData(event.currentTarget)
    )
    const userType = selectedTypeRef.current
    const userPermission = selectedCustomPermRef.current
    const tags = refTags.current

    router.push('/settings/users/add-user/locations')
    /*
    const emailList = emails
      .toString()
      .split(',')
      .map((email) => email.trim())
      */
    // TODO
  }

  return { 
    handleSubmit, 
    mailsValidator, 
    handleUserType, 
    handleChangeCustomPermission,
    handleTags,
    isOpen, 
    handleOpen, 
    handleClose
  }
}