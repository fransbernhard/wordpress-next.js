import Head from 'next/head';

import type { AppProps } from 'next/app'

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mimi</title>
        <meta
          name="description"
          content="My attempt at headless Next/WP"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;