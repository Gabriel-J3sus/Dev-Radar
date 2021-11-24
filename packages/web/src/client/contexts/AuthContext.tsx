import { api } from '@services/api'
import { useRouter } from 'next/dist/client/router'
import { createContext } from 'react'
import toast from 'react-hot-toast'

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
  const router = useRouter()

  async function register({ ...props }: CreateUserProps) {
    const createUser = async () =>
      await api.post('/signup', {
        name: props.name,
        username: props.username,
        email: props.email,
        password: props.password
      })

    await toast.promise(createUser(), {
      loading: 'Salvando...',
      success: <b>Seja bem-vindo.</b>,
      error: <b>Não foi possível criar usuário.</b>
    })

    router.push('/')
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
