import Head from 'next/head'
import styles from '@/styles/Company.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { CompanyForm } from '@/components/molecules/CompanyForm'
import { NavigationText } from '@/components/atoms/NavigationText'
import { userValidation } from '@/utils/functions/userValidation'

export default function AddCompany() {
  return (
    <>
      <Head>
        <title>Company Register</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <SectionTitle title='Company Register' />
        <NavigationText text='< Back to Companies' href='/settings/companies' />
        <CompanyForm />
      </main>
    </>
  )
}

AddCompany.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getServerSideProps(context: any) {
  const token = context.req?.cookies?.token
  return await userValidation({ token })
}
