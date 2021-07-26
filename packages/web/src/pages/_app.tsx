import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { AuthContextProvider } from 'src/contexts/AuthContext'
import { light } from '@styles/themes/light'

import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={light}>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </AuthContextProvider>
  )
}

export default MyApp
