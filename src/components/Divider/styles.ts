import styled from 'styled-components'

export const DividerContainer = styled.div`
  position: relative;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.placeholder};

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.placeholder};
  }

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.placeholder};
  }
`
