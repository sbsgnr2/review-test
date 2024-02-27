import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { NavigationText } from '@/components/atoms/NavigationText'
import { HeaderSection } from '@/components/molecules/HeaderSection'
import Table from '@/components/molecules/Table'
import { COMPANY_DATA, COMPANY_HEADER, COMPANY_TABLE_CONFIG } from '@/mocks/table'
import { CommonFilters } from '@/components/molecules/Users/CommonFilters'

export default function Companies() {
  return (
    <>
      <Head>
        <title>Companies</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <SectionTitle title='Companies' />
        <NavigationText text='< Back to Account and Settings' href='/settings' />
        <HeaderSection
          textButton='+ Add Company'
          title='Companies'
          href='/settings/companies/add-company'
        />
        <CommonFilters />
        <Table
          header={COMPANY_HEADER}
          data={COMPANY_DATA}
          tableConfig={COMPANY_TABLE_CONFIG}
          width='100%'
          backgroundColor='transparent'
          headerColor='var(--primary-color)'
          handleDelete={() => {}}
          handleEdit={() => {}}
        />
      </main>
    </>
  )
}

Companies.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
