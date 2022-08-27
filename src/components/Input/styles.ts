import styled, { css } from 'styled-components'

interface InputContainerProps {
  hasError: boolean
}

export const InputContainer = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const InputWrapper = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: 6px;
  border: 1px solid rgba(177, 182, 166, 0.5);
  padding: 0.5rem 0.75rem;
  height: 3rem;

  &:focus-within {
    border-color: ${(props) => props.theme.blue};
  }

  svg {
    color: ${(props) => props.theme.placeholder};
  }

  ${(props) =>
    props.hasError &&
    css`
      border-color: ${props.theme.red};
    `}
`

export const InputElement = styled.input`
  width: 100%;
  height: 100%;

  outline: none;
  border: 0;

  color: ${(props) => props.theme.black};

  &::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`

export const ErrorMessage = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme.red};
`
