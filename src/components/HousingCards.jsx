import Card from './Card'
import data from '../data/data.json'
import styled from 'styled-components'

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 31.5%);

  background: #f7f7f7;
  border-radius: 25px;
  gap: 30px;
  padding: 20px;
  margin 0 20px;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 46.5%);
  }

  @media (max-width: 500px) {
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #ffff;
  }
`

// display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;

function HousingCards() {
  return (
    <CardList>
      {data.map((housing, index) => (
        <Card
          key={housing.id}
          id={housing.id}
          title={housing.title}
          picture={housing.cover}
        />
      ))}
    </CardList>
  )
}

export default HousingCards
