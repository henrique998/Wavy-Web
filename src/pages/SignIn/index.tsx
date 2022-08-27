import { useForm } from 'react-hook-form'
import { At, LockKey } from 'phosphor-react'
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
  SignInContainer,
  LogoContainer,
  FormContainer,
  LogoWrapper,
  FieldBox,
  AuthOptionsContainer,
  AccountMessage,
} from './styles'
import { useAuth } from '../../hooks/useAuth'

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

const credentialsSignInFormSchema = zod.object({
  email: zod
    .string()
    .trim()
    .min(1, 'Campo obrigatório')
    .email('Infome um email válido!'),
  password: zod.string().trim().min(6, 'Campo obrigatório!'),
})

type SignInFormData = zod.infer<typeof credentialsSignInFormSchema>

export function SignIn() {
  const { signInWithCrendentials } = useAuth()

  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: zodResolver(credentialsSignInFormSchema),
  })

  function setAuthMethodInLocalStorage(method: string) {
    localStorage.setItem('method', method)
  }

  async function handleSignIn(data: SignInFormData) {
    await signInWithCrendentials(data)
  }

  const { errors } = formState

  const emailError = errors.email?.message
  const passwordError = errors.password?.message

  return (
    <SignInContainer>
      <LogoContainer>
        <img src={wavyLogo} alt="" />
      </LogoContainer>

      <FormContainer>
        <LogoWrapper>
          <img src={wavyLogo} alt="" />
        </LogoWrapper>

        <div className="form-wrapper">
          <header>
            <h1>Sentimos sua falta</h1>

            <p>Acesse sua conta para aproveitar a plataforma</p>
          </header>

          <form onSubmit={handleSubmit(handleSignIn)}>
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

            <FormButton title="Entrar" />
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
            Não possui uma conta? <a href="/sign-up">Inscreva-se.</a>{' '}
          </AccountMessage>

          <footer>&copy; Wave Inc. 2022</footer>
        </div>
      </FormContainer>
    </SignInContainer>
  )
}
