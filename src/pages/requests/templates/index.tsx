import Head from 'next/head'
import styles from '@/styles/Setting.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import React from 'react'
import { userValidation } from '@/utils/functions/userValidation'
import { NavigationText } from '@/components/atoms/NavigationText'
import { MENU_OPTIONS } from '@/utils/constants/campaigns'
import { HorizontalMenu } from '@/components/molecules/HorizontalMenu'

export default function Settings() {
  return (
    <>
      <Head>
        <title>Templates</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <HorizontalMenu items={MENU_OPTIONS} />
          <SectionTitle title='Templates' />
          <NavigationText text='< Back to Account and Settings' href='/settings' />
        </section>
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
