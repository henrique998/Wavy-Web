import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from '../contexts/AuthContext'
import { defaultTheme } from '../styles/themes/default'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}
