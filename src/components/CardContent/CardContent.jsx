import Card from '../Card/Card'
import data from '../../data/data.json'
import './style.css'

function CardContent() {
  return (
    <div className="cards">
      {data.map((housing, index) => (
        <Card
          key={housing.id}
          id={housing.id}
          title={housing.title}
          picture={housing.cover}
        />
      ))}
    </div>
  )
}

export default CardContent
