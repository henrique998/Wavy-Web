import logo from '../../../../assets/logo.svg'
import avatarIcon from '../../../../assets/avatarIcon.png'

import { AvatarContainer, Avatar, HeaderContainer } from './styles'
import { useAuth } from '../../../../hooks/useAuth'

export function Header() {
  const { user } = useAuth()

  return (
    <HeaderContainer>
      <div className="header-wrapper">
        <img src={logo} alt="" className="logo" />

        <AvatarContainer>
          <span>Olá {user?.name}! Tudo Bem?</span>
          {user?.avatar_url ? (
            <Avatar
              src={user.avatar_url}
              alt={`foto do usuário ${user.name}`}
            />
          ) : (
            <img src={avatarIcon} alt="ícone de avatar" />
          )}
        </AvatarContainer>
      </div>
    </HeaderContainer>
  )
}
