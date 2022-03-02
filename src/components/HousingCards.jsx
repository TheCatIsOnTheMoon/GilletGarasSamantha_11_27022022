import Card from './Card'
import data from '../data/data.json'

function HousingCards() {
  return (
    <div>
      {data.map((housing, index) => (
        <Card
          key={housing.id}
          title={housing.title}
          picture={housing.pictures[0]}
        />
      ))}
    </div>
  )
}

export default HousingCards
