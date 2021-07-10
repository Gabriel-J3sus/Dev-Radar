import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { light } from '../styles/themes/light'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
