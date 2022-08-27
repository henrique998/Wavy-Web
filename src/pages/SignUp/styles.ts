import styled from 'styled-components'

export const SignUpContainer = styled.main`
  display: flex;

  section {
    height: 100vh;
    flex: 1;
  }
`

export const LogoContainer = styled.section`
  background-color: rgba(27, 190, 208, 0.08);

  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const FormContainer = styled.section`
  padding: 1rem;

  header {
    margin-top: 3rem;

    text-align: center;

    h1,
    p {
      color: ${(props) => props.theme.black};
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 44px;
    }
  }

  form {
    margin-top: 3.75rem;
    margin-bottom: 2rem;

    display: grid;
    gap: 1.5rem;
  }

  footer {
    margin-top: 5rem;
    text-align: center;
    color: ${(props) => props.theme.placeholder};
  }

  @media screen and (min-width: 768px) {
    .form-wrapper {
      max-width: 24.125rem;

      margin: 0 auto;

      header {
        margin-top: 1rem;
      }

      form {
        margin-top: 1.75rem;
        margin-bottom: 1rem;

        gap: 1rem;
      }

      footer {
        margin-top: 1rem;
      }
    }
  }
`

export const LogoWrapper = styled.div`
  img {
    width: 1.25rem;
    height: 1.25rem;

    display: block;
  }
`

export const FieldBox = styled.div`
  width: 100%;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }
`

export const AuthOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;

  margin-top: 1rem;
`

export const AccountMessage = styled.span`
  display: block;
  margin-top: 2.125rem;
  text-align: center;

  color: ${(props) => props.theme.black};
  line-height: 22px;

  a {
    color: ${(props) => props.theme.blue};
  }

  @media screen and (min-width: 1024px) {
    margin-top: 1.125rem;
  }
`
