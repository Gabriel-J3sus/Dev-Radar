import { light } from "./light";

export const theme = {
  colors: {
    ...light,

  },

  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
} as const

export type ThemeType = typeof theme

export default theme
