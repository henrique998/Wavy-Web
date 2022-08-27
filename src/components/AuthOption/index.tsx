import { AuthOptionElement } from './styles'

interface AuthOptionProps {
  path: string
  icon: string
  alt: string
  onClick: () => void
}

export function AuthOption({ path, icon, alt, onClick }: AuthOptionProps) {
  return (
    <AuthOptionElement href={path} onClick={onClick}>
      <img src={icon} alt={alt} />
    </AuthOptionElement>
  )
}
