import Head from 'next/head'
import generalStyles from '@/styles/AddUser.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { AddUserForm } from '@/components/molecules/AddUser'
import { NavigationText } from '@/components/atoms/NavigationText'
import { CheckedPoints } from '@/components/molecules/CheckedPoints'
import { userValidation } from '@/utils/functions/userValidation'

export default function AddUser() {
  const checkedArr = [
    {
      title: 'Create Profile',
      label: 1,
      completed: false,
      actual: true,
    },
    {
      title: 'Locations',
      label: 2,
      completed: false,
      actual: false,
    },
    {
      title: 'Finish',
      label: 3,
      completed: false,
      actual: false,
    },
  ]

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
        <CheckedPoints checkedArr={checkedArr} />
        <AddUserForm />
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
