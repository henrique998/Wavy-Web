import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

export interface User {
  name: string
  email: string
  avatar_url?: string
}

interface IResponse {
  token: string
  userData: User
}

type SignInCredentials = {
  email: string
  password: string
}

type SignUpCredentials = {
  name: string
  email: string
  password: string
}

type AuthContextData = {
  user: User | undefined
  signInWithCrendentials: (data: SignInCredentials) => Promise<void>
  signUpWithCrendentials: (data: SignUpCredentials) => Promise<void>
  handleSignOut: () => void
}

export const AuthContext = createContext({} as AuthContextData)

interface AuthContextProviderProps {
  children: ReactNode
}

const token = localStorage.getItem('@wavy:token')

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      api
        .get('/accounts/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setUser(response.data))
        .catch((error) => console.log(error.response.data.message))
    }
  }, [])

  useEffect(() => {
    const url = new URLSearchParams(window.location.search)

    const code = url.get('code')

    const authMethod = localStorage.getItem('method')

    if (code && authMethod) {
      api
        .post<IResponse>(`/accounts/${authMethod}`, {
          auth_code: code,
        })
        .then((response) => {
          console.log(response)
          const { token, userData } = response.data
          setUser(userData)
          localStorage.setItem('@wavy:token', token)
        })

      localStorage.removeItem('method')

      url.delete('code')

      navigate('/dashboard')
    }
  }, [navigate])

  async function signInWithCrendentials(data: SignInCredentials) {
    const response = await api.post<IResponse>('/session/credentials', {
      email: data.email,
      password: data.password,
    })

    const { token, userData } = response.data

    setUser(userData)

    localStorage.setItem('@wavy:token', token)

    navigate('/dashboard')
  }

  async function signUpWithCrendentials(data: SignUpCredentials) {
    await api.post('/accounts', {
      name: data.name,
      email: data.email,
      password: data.password,
    })
  }

  function handleSignOut() {
    if (token) {
      localStorage.removeItem('@wavy:token')

      navigate('/')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithCrendentials,
        signUpWithCrendentials,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
