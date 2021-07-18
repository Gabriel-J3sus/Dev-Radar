import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { light } from '@styles/themes/light'
import { AuthContextProvider } from 'src/contexts/AuthContext'

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
