import Head from 'next/head'
import styles from '@/styles/Setting.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import React from 'react'
import { sectionCardType } from '@/models/sectionCardType'
import MenuSectionCard from '@/components/molecules/MenuSectionCard'
import { SETTINGS_CONFIG } from '../../components/molecules/Settings/config'
import { userValidation } from '@/utils/functions/userValidation'

export default function Settings() {
  return (
    <>
      <Head>
        <title>Accounts & Settings</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <SectionTitle title='Accounts & Settings' />
          {SETTINGS_CONFIG?.map((settingItem: sectionCardType) => {
            return (
              <React.Fragment key={settingItem.sectionTitle}>
                <MenuSectionCard settingItem={settingItem} />
              </React.Fragment>
            )
          })}
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
