import { Providers } from './providers'
import { Routes } from './Router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <Providers>
      <Routes />

      <GlobalStyle />
    </Providers>
  )
}
