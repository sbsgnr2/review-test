/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCvbn7Nrak7CFL8w-03B5jTwR6vZlTRcq8&libraries=places&callback=Function.prototype'></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
