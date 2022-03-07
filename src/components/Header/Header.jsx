import { Link } from 'react-router-dom'
import logo from './logo_primary.svg'
import './style.css'

function Header() {
  return (
    <header>
      <img src={logo} className="header_logo" alt="logo" />
      <nav>
        <Link to="/" className="header_link">
          Accueil
        </Link>
        <Link to="/about" className="header_link">
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
