import React from 'react'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globals'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
