import { multEmailValidator } from "@/utils/validations/multEmailsValidator"
import { FormEvent, useRef } from "react"

export function useAddUser () {
  const selectedTypeRef = useRef<string>('');
  const selectedAccessUserRef = useRef<string[]>([]);
  const selectedCustomPermRef = useRef<string[]>([]);
  const refTags = useRef<string[]>([])

  function handleTags ({ tags }: { tags: string[] }) {
    refTags.current = tags
  }

  function mailsValidator(value: string) {
    return multEmailValidator({ emails: value })
  }

  function handleUserType(selectedValue: string) {
    selectedTypeRef.current = selectedValue;
  }

  function handleChangeSelectedUserAccess({ value }: { value: string[] }) {
    selectedAccessUserRef.current = value;
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
    const accessUser = selectedAccessUserRef.current
    const userPermission = selectedCustomPermRef.current
    const tags = refTags.current

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
    handleChangeSelectedUserAccess, 
    handleChangeCustomPermission,
    handleTags
  }
}