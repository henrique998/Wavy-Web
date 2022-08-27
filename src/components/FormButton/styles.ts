import styled from 'styled-components'

export const ButtonElement = styled.button`
  height: 3rem;
  width: 100%;

  text-align: center;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.blue};
  border: 1px solid ${(props) => props.theme['blue-medium']};
  border-radius: 6px;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.92);
  }
`
