import Head from 'next/head'
import stylesSetting from '@/styles/Setting.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import React from 'react'
import { NavigationText } from '@/components/atoms/NavigationText'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { ProfileForm } from '@/components/molecules/ProfileForm'
import { ResetPasswordForm } from '@/components/molecules/ResetPasswordForm'
import { OptionsHandle } from '@/components/molecules/OptionsHandle'
import { useSelect } from '@/components/molecules/Settings/useSelect'
import { userValidation } from '@/utils/functions/userValidation'

export default function Settings() {
  const { options, selectedOption, handleSelected } = useSelect()

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={stylesSetting.main}>
        <NavigationText text='< Back to Account and Settings' href='/settings' />
        <SectionTitle title='Edit Profile' />
        <OptionsHandle
          options={options}
          handleSelected={handleSelected}
          selectedOption={selectedOption}
        />
        {selectedOption === 'User Info' ? <ProfileForm /> : <ResetPasswordForm />}
      </main>
    </>
  )
}

Settings.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getServerSideProps(context: any) {
  const token = context.req?.cookies?.token
  return await userValidation({ token })
}
