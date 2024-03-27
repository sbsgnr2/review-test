import '@/styles/globals.css'
import { appPropsWithLayout } from '@/models/appPropsWithLayoutType'
import { useStore } from '@/zustand/auth'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: appPropsWithLayout) {
  const { initializeStore } = useStore()

  useEffect(() => {
    initializeStore()
  }, [initializeStore])

  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
