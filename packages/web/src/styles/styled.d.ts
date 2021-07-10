import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'light' | 'dark'

    colors: {
      primary: string
      secondary: string
      tertiary: string
      title: string
      detail: string
      bg: string
      bgForm: string
      logo: string
      border: string
    }
  }
}
