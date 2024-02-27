import { AppProps } from 'next/app'
import { nextPageWithLayout } from './nextPageWithLayoutType'

export type appPropsWithLayout = AppProps & {
    Component: nextPageWithLayout
}
