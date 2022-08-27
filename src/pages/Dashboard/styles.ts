import styled from 'styled-components'

export const DashboardContainer = styled.main`
  padding: 1rem;

  > span {
    display: block;

    margin-top: 1.25rem;
    text-align: center;
    color: rgba(50, 48, 49, 0.65);
    font-weight: 600;
  }
`

export const Content = styled.div`
  margin-top: 8.875rem;

  img {
    width: 7.8125rem;
    height: 9.375rem;
  }

  text-align: center;

  p {
    margin-top: 2.25rem;
    font-weight: 600;
    color: rgba(50, 48, 49, 0.65);
  }

  @media screen and (min-width: 1024px) {
    p {
      width: 24.875rem;
      font-size: 1.25rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
`

export const LoggoutButton = styled.button`
  margin-top: 1.25rem;
  margin-left: auto;
  margin-right: auto;

  background: rgba(27, 190, 208, 0.08);
  height: 3.375rem;
  border-radius: 6px;
  padding: 1rem;
  color: ${(props) => props.theme.blue};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
