import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { userValidation } from '@/utils/functions/userValidation'

import { getAll } from '@/services/reviews/getAll'
import { Body } from '@/components/molecules/Reviews/Body'

export default function Reviews({ total }: any) {
  return (
    <>
      <Head>
        <title>Reviews</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <Body total={total} />
      </main>
    </>
  )
}

Reviews.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getServerSideProps(context: any) {
  const token = context.req?.cookies?.token
  const reviews = await getAll({ page: '1', pageSize: '5', token })
  return await userValidation({ token, extraProps: { total: reviews?.data?.totalItems || 0 } })
}
