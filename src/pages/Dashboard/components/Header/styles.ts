import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.white};

  border: 1px solid rgba(50, 48, 49, 0.1);

  .logo {
    width: 1.875rem;
    height: 1.875rem;
  }

  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
  }

  @media screen and (min-width: 1024px) {
    .header-wrapper {
      max-width: 65.625rem;
      margin: 0 auto;
    }
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: none;
  }

  img {
    width: 1.875rem;
    height: 1.875rem;
  }

  @media screen and (min-width: 768px) {
    span {
      display: block;

      font-size: 1.125rem;
      font-weight: 500;
      color: rgba(50, 48, 49, 0.65);
    }
  }
`

export const Avatar = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
`
