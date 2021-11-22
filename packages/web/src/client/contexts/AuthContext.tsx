import { createContext } from 'react'

interface SignInProps {
  email: string
  password: string
}

interface CreateUserProps extends SignInProps {
  name: string
  username: string
  // technologies: number[]
  // githubURL: string
  // latitude: number
  // longitude: number
}

interface AuthContextProps {
  register(createUserData: CreateUserProps): Promise<void>
  signIn(signInData: SignInProps): Promise<void>
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }) {
  async function register({ ...props }: CreateUserProps) {
    console.log(props.name, props.username, props.email, props.password)
  }

  async function signIn({ password, email }: SignInProps) {
    console.log(email, password)
  }

  return (
    <AuthContext.Provider value={{ register, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
