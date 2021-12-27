import { CssBaseline, useMediaQuery } from '@material-ui/core';
import { lightBlue, orange } from '@material-ui/core/colors';
import { jaJP } from '@material-ui/core/locale';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkState, setDarkState] = useState(false);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);
  useEffect(() => {
    setDarkState(prefersDarkMode);
  }, [prefersDarkMode]);

  const color1 = lightBlue[500];
  const color2 = orange[300];
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: darkState ? color2 : color1,
          },
          secondary: {
            main: darkState ? color1 : color2,
          },
          type: darkState ? 'dark' : 'light',
        },
        typography: {
          fontFamily: [
            'Noto Sans JP',
            'sans-serif',
          ].join(','),
        },
      }, jaJP),
    [darkState, color1, color2],
  );

  return (
    <>
      <Head>
        <title>hamatatsu&apos;s page</title>
        <meta name="description" content="The home page of hamatatsu's page." />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} darkState={darkState} setDarkState={setDarkState} />
      </ThemeProvider>
    </>
  );
}
