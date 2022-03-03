import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/LOGO.svg'

const Logo = styled.img`
  position: absolute;
  height: 47px;
  width: 145px;
  margin: 20px;

  color: var(--color-primary);
`

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  line-height: 17px;
  padding-left: 57px;

  color: var(--color-primary);

  @media (max-width: 800px) {
    text-transform: uppercase;
    font-size: 1rem;
    padding-left: 10px;
  }
`

const NavBar = styled.span`
  display: flex;
  flex-direction: row-reverse;
  padding: 38px 20px;
`

function Header() {
  return (
    <header>
      <Logo src={logo} alt="logo" />
      <NavBar>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </NavBar>
    </header>
  )
}

export default Header
