import Head from 'next/head'
import styles from '@/styles/Login.module.css'
import { Footer } from '@/components/molecules/Login/Footer'
import { Body } from '@/components/molecules/Login/Body'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <div className={styles.login_container}>
          <Body />
          <Footer />
        </div>
      </main>
    </>
  )
}
