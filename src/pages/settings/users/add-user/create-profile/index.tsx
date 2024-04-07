import Head from 'next/head'
import generalStyles from '@/styles/AddUser.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement, useEffect, useState } from 'react'
import { userValidation } from '@/utils/functions/userValidation'
import FirstStep from '@/components/organisms/UserFlow/FirstStep'
import SecondStep from '@/components/organisms/UserFlow/SecondStep'
import { NavigationText } from '@/components/atoms/NavigationText'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import ThirdStep from '@/components/organisms/UserFlow/ThirdStep'
import { useUser } from '@/zustand/user'

export default function AddUser() {
  const [step, setStep] = useState<number>(1)
  const { setUser } = useUser()

  function handleStep(num: number) {
    setStep(num)
  }

  /*
    useEffect(() => {
      return () => {
        setUser({})
      }
    }, [setUser])
  */

  return (
    <>
      <Head>
        <title>Create New User</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={generalStyles.main}>
        <NavigationText text='< Back to Users' href='/settings/users' />
        <SectionTitle title='Create New User' />
        {step === 1 && <FirstStep handleStep={handleStep} />}
        {step === 2 && <SecondStep handleStep={handleStep} />}
        {step === 3 && <ThirdStep handleStep={handleStep} />}
      </main>
    </>
  )
}

AddUser.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getServerSideProps(context: any) {
  const token = context.req?.cookies?.token
  return await userValidation({ token })
}
