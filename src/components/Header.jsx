import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-family: var(--font-primary);
  font-size: 1rem;
  line-height: 17px;
  padding-left: 10px;

  color: var(--color-primary);
`

const NavBar = styled.span`
  display: flex;
  flex-direction: row-reverse;
`

function Header() {
  return (
    <NavBar>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/about">A Propos</StyledLink>
    </NavBar>
  )
}

export default Header
