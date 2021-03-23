import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import theme from '../styles/theme';
import React from 'react';

export default function MyApp({Component, pageProps}: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
