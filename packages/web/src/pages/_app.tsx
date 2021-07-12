import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { light } from '@styles/themes/light'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
