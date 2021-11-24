import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Toaster } from 'react-hot-toast'

import { AuthContextProvider } from '@contexts/AuthContext'

import GlobalStyle from '@styles/global'
import { theme } from '@styles/themes/Theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Component {...pageProps} />

        <Toaster />
      </ThemeProvider>
    </AuthContextProvider>
  )
}

export default MyApp
