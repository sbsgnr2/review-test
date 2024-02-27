import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { NavigationText } from '@/components/atoms/NavigationText'
import { HeaderSection } from '@/components/molecules/HeaderSection'
import Table from '@/components/molecules/Table'
import { LOCATION_DATA, LOCATION_HEADER, LOCATION_TABLE_CONFIG } from '@/mocks/table'
import { CommonFilters } from '@/components/molecules/Users/CommonFilters'

export default function Locations() {
  return (
    <>
      <Head>
        <title>Locations</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <SectionTitle title='Locations' />
        <NavigationText text='< Back to Account and Settings' href='/settings' />
        <HeaderSection
          textButton='+ Add Location'
          title='Locations'
          href='/settings/locations/add-location'
        />
        <CommonFilters />
        <Table
          header={LOCATION_HEADER}
          data={LOCATION_DATA}
          tableConfig={LOCATION_TABLE_CONFIG}
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

Locations.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
