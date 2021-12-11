import { light } from './light'
import { dark } from './dark'

export const baseColors = {
  logo: '#8257E5',
  'dark-purple': '#714CDE',
  purple: '#987EE3',
  'light-purple': 'rgba(152, 126, 227, 0.8)',
  'light-gray': '#ACACAD',
  white: '#FFF',
  black: '#000'
}

export const theme = {
  themes: {
    light: {
      ...baseColors,
      ...light
    },
    dark: {
      ...baseColors,
      ...dark
    }
  }

  // breakpoints: {
  //   // xs: '0px',
  //   // sm: '576px',
  //   // md: '768px',
  //   // lg: '992px',
  //   // xl: '1200px'
  // }
} as const
