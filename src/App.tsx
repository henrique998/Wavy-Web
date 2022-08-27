import { Providers } from './providers'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <Providers>
      <Router />

      <GlobalStyle />
    </Providers>
  )
}
