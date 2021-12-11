import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { theme as colors } from '@styles/themes/Theme'
import toast from 'react-hot-toast'

export type ThemeType = 'light' | 'dark'

export interface ThemeContextProps {
  theme: ThemeType
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light')

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme])

  useEffect(() => {
    const storagedValue = localStorage.getItem('@DevRadar-Theme')

    if (storagedValue === 'dark') {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@DevRadar-Theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider
        theme={{
          colors: { ...colors.themes[theme] },
          current: theme
        }}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const theme = useContext(ThemeContext)

  return theme
}
