import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40% 0 40% 0;
`
const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  margin: auto;
  padding: 0 0 62px 0;
  color: var(--color-primary);
`

const ErrorNbr = styled.span`
  font-size: 96px;
  font-weight: 700;
  line-height: 137px;
  padding-bottom: 11px;
  margin: auto;
`
const ErrorText = styled.span`
  font-size: 18px;
  text-align: center;
  padding-bottom: 133px;
`

const StyledLink = styled(Link)`
  text-decoration: underline;
  font-size: 1rem;
  line-height: 17px;
  padding-left: 10px;
  color: var(--color-primary);
  margin: auto;
  text-align: center;
`

function Error() {
  return (
    <ErrorPage>
      <ErrorBox>
        <ErrorNbr>404</ErrorNbr>
        <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
      </ErrorBox>
      <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
    </ErrorPage>
  )
}

export default Error
