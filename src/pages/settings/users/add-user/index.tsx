import Head from 'next/head'
import styles from '@/styles/AddUser.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { AddUserForm } from '@/components/molecules/AddUser'
import { NavigationText } from '@/components/atoms/NavigationText'

export default function AddUser() {
  return (
    <>
      <Head>
        <title>Add User</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <SectionTitle title='Add User' />
        <NavigationText text='< Back to Users' href='/settings/users' />
        <AddUserForm />
      </main>
    </>
  )
}

AddUser.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
