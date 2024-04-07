import Head from 'next/head'
import stylesSetting from '@/styles/Setting.module.css'
import React from 'react'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { NavigationText } from '@/components/atoms/NavigationText'
import { userValidation } from '@/utils/functions/userValidation'
import { Body } from '@/components/molecules/Users/Body'
import { getAll } from '@/services/users/getAll'

export default function Settings({ total }: any) {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={stylesSetting.main}>
        <NavigationText text='< Back to Account and Settings' href='/settings' />
        <Body total={total} />
      </main>
    </>
  )
}

Settings.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getServerSideProps(context: any) {
  const token = context.req?.cookies?.token
  const users = await getAll({ page: '1', pageSize: '5', token })
  return await userValidation({ token, extraProps: { total: users?.data?.totalItems || 0 } })
}
