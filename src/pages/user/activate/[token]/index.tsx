import Head from 'next/head'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { ActivateAccountForm } from '@/components/molecules/ActivateAccountForm'
import styles from './Activate.module.css'
import { tokenValidation } from '@/services/users/tokenValidation'
import jwt from 'jsonwebtoken'

export default function UserActivation({ data, token }: any) {
  return (
    <>
      <Head>
        <title>User Confirmation</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.container}>
        <SectionTitle title='Activate your account' />
        <ActivateAccountForm data={data} token={token} />
      </main>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const { token } = context.params
  // return await userValidation({ token })
  const response = await tokenValidation({ token })
  if (response?.data?.code === 'InactiveUser') {
    const decodedToken = jwt.decode(token)
    return { props: { data: decodedToken, token } }
  } else {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
}
