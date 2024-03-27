import Head from 'next/head'
import generalStyles from '@/styles/AddUser.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { NavigationText } from '@/components/atoms/NavigationText'
import { CheckedPoints } from '@/components/molecules/CheckedPoints'
import { UserInfo } from '@/components/molecules/Finish/UserInfo'
import { Button } from '@/components/molecules/Form/Button'
import { Message } from '@/components/molecules/Finish/Message'
import { userValidation } from '@/utils/functions/userValidation'

export default function Finish() {
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
      completed: true,
      actual: false,
    },
    {
      title: 'Finish',
      label: 3,
      completed: false,
      actual: true,
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
        <NavigationText text='< Back to Locations' href='/settings/users/add-user/locations' />
        <SectionTitle title='Create New User' />
        <CheckedPoints checkedArr={checkedArr} />
        <UserInfo />
        <Message />
        <Button
          variant='contained'
          type='button'
          width='max-content'
          fontSize='0.85rem'
          height='1.8rem'
          ariaLabel='Complete Profile'
        >
          Complete Profile
        </Button>
      </main>
    </>
  )
}

Finish.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getServerSideProps(context: any) {
  const token = context.req?.cookies?.token
  return await userValidation({ token })
}
