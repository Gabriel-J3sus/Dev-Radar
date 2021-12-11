import { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Toaster } from 'react-hot-toast'

import { AuthContextProvider } from '@contexts/AuthContext'
import { ThemeContextProvider } from '@contexts/ThemeContext'

import GlobalStyle from '@styles/global'

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
      <ThemeContextProvider>
        <GlobalStyle />

        {getLayout(<Component {...pageProps} />)}

        <Toaster
          toastOptions={{
            style: {
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--primary)'
            }
          }}
        />
      </ThemeContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
