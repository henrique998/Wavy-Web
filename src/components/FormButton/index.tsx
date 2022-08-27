import { HTMLAttributes } from 'react'
import { ButtonElement } from './styles'

interface FormButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string
}

export function FormButton({ title, ...props }: FormButtonProps) {
  return <ButtonElement {...props}>{title}</ButtonElement>
}
