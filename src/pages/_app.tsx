import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>MoveIt</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <meta
          name="description"
          content="A simple application to work with Typescript, React, NextJs
          and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />;
    </ThemeProvider>
  )
}

export default App
