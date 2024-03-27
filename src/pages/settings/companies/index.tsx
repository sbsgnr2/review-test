import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { NavigationText } from '@/components/atoms/NavigationText'
import { HeaderSection } from '@/components/molecules/HeaderSection'
import { CommonFilters } from '@/components/molecules/Users/CommonFilters'
import { userValidation } from '@/utils/functions/userValidation'
import { getAll } from '@/services/companies/getAll'
import { CompanyTable } from '@/components/molecules/Company/Table'

export default function Companies({ total }: any) {
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
          count={total}
        />
        <CommonFilters />
        <CompanyTable />
      </main>
    </>
  )
}

Companies.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getServerSideProps(context: any) {
  const token = context.req?.cookies?.token
  const companies = await getAll({ page: '1', pageSize: '5', token })
  return await userValidation({ token, extraProps: { total: companies?.data?.totalItems || 0 } })
}
