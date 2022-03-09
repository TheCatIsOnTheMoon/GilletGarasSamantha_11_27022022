import { Link } from 'react-router-dom';
import './style.css';

function Card({ id, title, picture }) {
  return (
    <div className="card">
      <Link to={`/housing/${id}`} className="card_link">
        <figure>
          <img src={picture} className="card_img" alt="housing" />
          <div className="card_img_innershadow"></div>
          <figcaption>{title}</figcaption>
        </figure>
      </Link>
    </div>
  );
}

export default Card;
