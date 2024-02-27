import Head from 'next/head'
import styles from '@/styles/AddUser.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { AddLocationForm } from '@/components/molecules/AddLocationForm'
import { NavigationText } from '@/components/atoms/NavigationText'

export default function AddLocation() {
  return (
    <>
      <Head>
        <title>Add Locations</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <SectionTitle title='Add Locations' />
        <NavigationText text='< Back to Locations' href='/settings/locations' />
        <AddLocationForm />
      </main>
    </>
  )
}

AddLocation.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
