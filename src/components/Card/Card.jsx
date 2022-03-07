import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.css'

function Card({ id, title, picture }) {
  return (
    <div className="card">
      <Link to={`/housing/${id}`} className="card_link">
        <figure>
          <img src={picture} className="card_img" alt="housing" />
          <figcaption>{title}</figcaption>
        </figure>
      </Link>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
}

export default Card
