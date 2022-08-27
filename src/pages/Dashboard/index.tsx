import { Power } from 'phosphor-react'
import { Header } from './components/Header'

import walletIlustration from '../../assets/walletIlustration.svg'

import { DashboardContainer, Content, LoggoutButton } from './styles'
import { useAuth } from '../../hooks/useAuth'

export function Dashboard() {
  const { handleSignOut } = useAuth()

  return (
    <>
      <Header />

      <DashboardContainer>
        <Content>
          <img
            src={walletIlustration}
            alt="ilustração de uma carteira com criptomoedas"
          />

          <p>
            Comece a negociar as suas criptomoedas e monte sua carteira de
            investimentos
          </p>
        </Content>

        <span>Ou</span>

        <LoggoutButton onClick={handleSignOut}>
          <Power size={20} />
          Sair
        </LoggoutButton>
      </DashboardContainer>
    </>
  )
}
