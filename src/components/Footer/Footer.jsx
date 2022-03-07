import logo from './logo_white.svg'
import './style.css'

function Footer() {
  return (
    <footer>
      <img src={logo} className="footer_logo" alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
