import Card from './Card'
import data from '../data/data.json'

function HousingCards() {
  return (
    <div>
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

export default HousingCards
