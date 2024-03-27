import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { userValidation } from '@/utils/functions/userValidation'
import { HeaderSection } from '@/components/molecules/HeaderSection'
import { HeaderButtons } from '@/components/molecules/Reviews/HeaderButtons'
import { Filters } from '@/components/molecules/Reviews/Filters'
import Table from '@/components/molecules/Table'
import { REVIEWS_DATA, REVIEWS_HEADER, REVIEWS_TABLE_CONFIG } from '@/utils/constants/reviews'

export default function Reviews() {
  return (
    <>
      <Head>
        <title>Reviews</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <HeaderSection title='Reviews' count={0}>
          <HeaderButtons />
        </HeaderSection>
        <Filters />
        <Table
          header={REVIEWS_HEADER}
          data={REVIEWS_DATA}
          tableConfig={REVIEWS_TABLE_CONFIG}
          width='100%'
          backgroundColor='transparent'
          headerColor='var(--primary-color)'
          handleDelete={() => {}}
          handleEdit={() => {}}
          padding='0 0 5rem 0'
        />
      </main>
    </>
  )
}

Reviews.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getServerSideProps(context: any) {
  const token = context.req?.cookies?.token
  return await userValidation({ token })
}
