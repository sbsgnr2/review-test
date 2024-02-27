import '@/styles/globals.css'
import { appPropsWithLayout } from '@/models/appPropsWithLayoutType'

export default function App({ Component, pageProps }: appPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
