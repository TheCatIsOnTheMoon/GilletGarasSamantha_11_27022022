import { Link } from 'react-router-dom'
import './style.css'

function Error() {
  return (
    <div className="error_page">
      <div className="error_content">
        <p className="error_nbr">404</p>
        <p className="error_description">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link to="/" className="error_return">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Error
