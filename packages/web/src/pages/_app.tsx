import { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Toaster } from 'react-hot-toast'

import { AuthContextProvider } from '@contexts/AuthContext'

import GlobalStyle from '@styles/global'
import { theme } from '@styles/themes/Theme'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {getLayout(<Component {...pageProps} />)}

        <Toaster />
      </ThemeProvider>
    </AuthContextProvider>
  )
}

export default MyApp
