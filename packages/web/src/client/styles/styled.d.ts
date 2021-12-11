/* eslint-disable @typescript-eslint/no-empty-interface */
import { ThemeType } from '@contexts/ThemeContext'
import { theme } from './themes/Theme'

interface Theme {
  current: ThemeType
}

declare module 'styled-components' {
  interface DefaultTheme extends Theme {
    colors: {
      logo: string
      link: string
      'dark-purple': string
      purple: string
      'light-purple': string
      ice: string
      'light-gray': string
      white: string
      black: string
      primary: string
      secondary: string
      tertiary: string
      detail: string
      'bg-primary': string
      'bg-secondary': string
    }
  }
}
