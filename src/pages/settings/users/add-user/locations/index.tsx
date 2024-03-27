import Head from 'next/head'
import generalStyles from '@/styles/AddUser.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { NavigationText } from '@/components/atoms/NavigationText'
import { CheckedPoints } from '@/components/molecules/CheckedPoints'
import Location from '@/components/molecules/Locations'
import { userValidation } from '@/utils/functions/userValidation'

export default function Locations() {
  const checkedArr = [
    {
      title: 'Create Profile',
      label: 1,
      completed: true,
      actual: false,
    },
    {
      title: 'Locations',
      label: 2,
      completed: false,
      actual: true,
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
        <NavigationText
          text='< Back to Create Profile'
          href='/settings/users/add-user/create-profile'
        />
        <SectionTitle title='Create New User' />
        <CheckedPoints checkedArr={checkedArr} />
        <Location />
      </main>
    </>
  )
}

Locations.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getServerSideProps(context: any) {
  const token = context.req?.cookies?.token
  return await userValidation({ token })
}
