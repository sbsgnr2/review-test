import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { SectionTitle } from '@/components/molecules/SectionTitle'

export default function Statistics() {
  return (
    <>
      <Head>
        <title>Statistics</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <SectionTitle title='Statistics' />
      </main>
    </>
  )
}

Statistics.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
