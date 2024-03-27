import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { ReactElement } from 'react'
import Review from '@/components/organisms/Review'
import { SectionTitle } from '@/components/molecules/SectionTitle'
import { userValidation } from '@/utils/functions/userValidation'

const generativeText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor sed velit luctus elementum. Nulla facilisi.
Vivamus tincidunt, erat non feugiat dictum, dui velit lacinia sem, nec dignissim felis velit at justo. Proin eleifend sem sit amet augue dapibus,
eu cursus metus tincidunt. Phasellus id facilisis sapien. Aliquam in dui ut felis fringilla sollicitudin.
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce at aliquet risus.
`
export default function ReviewsTest() {
  return (
    <>
      <Head>
        <title>Reviews</title>
        <meta name='description' content='Description' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.main}>
        <SectionTitle title='Reviews' />
        <br></br>
        <Review
          stars={3}
          name='Mario Aguilar'
          timeAbr='6 days ago'
          review={generativeText}
          provider='google'
          suggestedReply={generativeText}
        />
      </main>
    </>
  )
}

ReviewsTest.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getServerSideProps(context: any) {
  const token = context.req?.cookies?.token
  return await userValidation({ token })
}
