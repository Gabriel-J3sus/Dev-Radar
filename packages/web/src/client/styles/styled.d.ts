import 'styled-components'

import { ThemeType } from '@styles/themes/Theme'

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}
