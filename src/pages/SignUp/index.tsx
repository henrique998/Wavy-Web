import { At, LockKey, User } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { AuthOption } from '../../components/AuthOption'
import { Divider } from '../../components/Divider'
import { FormButton } from '../../components/FormButton'
import { Input } from '../../components/Input'

import wavyLogo from '../../assets/logo.svg'
import googleIcon from '../../assets/googleIcon.svg'
import githubIcon from '../../assets/githubIcon.svg'
import discordIcon from '../../assets/discordIcon.svg'

import {
  SignUpContainer,
  LogoContainer,
  FormContainer,
  LogoWrapper,
  FieldBox,
  AuthOptionsContainer,
  AccountMessage,
} from './styles'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const credentialsSignUpFormSchema = zod.object({
  name: zod.string().trim().min(1, 'Campo obrigatório!'),
  email: zod
    .string()
    .trim()
    .min(1, 'Campo obrigatórtio')
    .email('Infome um email válido!'),
  password: zod.string().trim().min(6, 'Campo obrigatório!'),
})

type SignUpFormData = zod.infer<typeof credentialsSignUpFormSchema>

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
const googleRedirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URL

const options = {
  redirect_uri: googleRedirectUri,
  client_id: googleClientId,
  access_type: 'offline',
  response_type: 'code',
  prompt: 'consent',
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ].join(' '),
}

const qs = new URLSearchParams(options)

const githubClientId = import.meta.env.VITE_GITHUB_CLIENT_ID
const discordClientId = import.meta.env.VITE_DICORD_CLIENT_ID

const githubRedirectUri = `https://github.com/login/oauth/authorize?client_id=${githubClientId}`
const discordRedirectUri = `https://discord.com/api/oauth2/authorize?client_id=${discordClientId}&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&response_type=code&scope=identify%20email`

export function SignUp() {
  const { signUpWithCrendentials } = useAuth()
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm<SignUpFormData>({
    resolver: zodResolver(credentialsSignUpFormSchema),
  })

  function setAuthMethodInLocalStorage(method: string) {
    localStorage.setItem('method', method)
  }

  async function handleSignUp(data: SignUpFormData) {
    await signUpWithCrendentials(data)

    navigate('/')
  }

  const { errors } = formState

  const nameError = errors.name?.message
  const emailError = errors.email?.message
  const passwordError = errors.password?.message

  return (
    <SignUpContainer>
      <FormContainer>
        <LogoWrapper>
          <img src={wavyLogo} alt="" />
        </LogoWrapper>

        <div className="form-wrapper">
          <header>
            <h1>Crie uma conta</h1>
          </header>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <FieldBox>
              <label htmlFor="name">Nome</label>
              <Input
                icon={<User size={22} />}
                placeholder="digite o seu nome"
                type={'text'}
                {...register('name')}
                error={nameError}
              />
            </FieldBox>

            <FieldBox>
              <label htmlFor="email">E-mail</label>
              <Input
                icon={<At size={22} />}
                placeholder="digite o seu email"
                type={'text'}
                {...register('email')}
                error={emailError}
              />
            </FieldBox>

            <FieldBox>
              <label htmlFor="password">Senha</label>
              <Input
                icon={<LockKey size={22} />}
                placeholder="digite a sua senha"
                type={'password'}
                {...register('password')}
                error={passwordError}
              />
            </FieldBox>

            <FormButton title="Inscrever-se" />
          </form>

          <Divider />

          <AuthOptionsContainer>
            <AuthOption
              path={`https://accounts.google.com/o/oauth2/v2/auth?${qs.toString()}`}
              icon={googleIcon}
              alt="ícone do google"
              onClick={() => setAuthMethodInLocalStorage('google')}
            />
            <AuthOption
              path={githubRedirectUri}
              icon={githubIcon}
              alt="ícone do github"
              onClick={() => setAuthMethodInLocalStorage('github')}
            />
            <AuthOption
              path={discordRedirectUri}
              icon={discordIcon}
              alt="ícone do discord"
              onClick={() => setAuthMethodInLocalStorage('discord')}
            />
          </AuthOptionsContainer>

          <AccountMessage>
            Já possui uma conta? <a href="/">Entre.</a>
          </AccountMessage>

          <footer>&copy; Wave Inc. 2022</footer>
        </div>
      </FormContainer>

      <LogoContainer>
        <img src={wavyLogo} alt="" />
      </LogoContainer>
    </SignUpContainer>
  )
}
