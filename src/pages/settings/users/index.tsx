import Head from 'next/head'
import stylesSetting from '@/styles/Setting.module.css'
import React from 'react'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { NavigationText } from '@/components/atoms/NavigationText'
import { HeaderSection } from '@/components/molecules/HeaderSection'
import { FullTable } from '@/components/molecules/Users/FullTable'

export default function Settings() {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={stylesSetting.main}>
        <NavigationText text='< Back to Account and Settings' href='/settings' />
        <HeaderSection textButton='+ Add User' title='Users' href='/settings/users/add-user' />
        <FullTable />
      </main>
    </>
  )
}

Settings.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
