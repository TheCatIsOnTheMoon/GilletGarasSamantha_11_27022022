import styled from 'styled-components'
import logo from '../assets/LOGO.svg'

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  padding: 62px 0 62px 0;
`
const Logo = styled.img`
  height: 47px;
  width: 145px;
  margin: auto;
  margin-bottom: 30px;

  filter: brightness(0) invert(1);
`

const FooterText = styled.span`
  margin: auto;

  color: var(--color-secondary);
`

function Footer() {
  return (
    <footer>
      <FooterBox>
        <Logo src={logo} alt="logo" />
        <FooterText>© 2020 Kasa. All rights reserved</FooterText>
      </FooterBox>
    </footer>
  )
}

export default Footer
