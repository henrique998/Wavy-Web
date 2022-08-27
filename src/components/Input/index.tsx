/* eslint-disable react/display-name */
import { WarningCircle } from 'phosphor-react'
import { forwardRef, InputHTMLAttributes, ReactElement, ReactSVG } from 'react'

import {
  InputContainer,
  InputWrapper,
  InputElement,
  ErrorMessage,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  icon: ReactElement<ReactSVG>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, icon, ...props }, ref) => {
    return (
      <InputContainer>
        <InputWrapper hasError={!!error}>
          {icon}
          <InputElement ref={ref} {...props} />
        </InputWrapper>

        {error && (
          <ErrorMessage>
            <WarningCircle size={20} />
            {error}
          </ErrorMessage>
        )}
      </InputContainer>
    )
  },
)
