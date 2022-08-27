import styled from 'styled-components'

export const AuthOptionElement = styled.a`
  height: 3rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(50, 48, 49, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${(props) => props.theme.blue};
  }
`
