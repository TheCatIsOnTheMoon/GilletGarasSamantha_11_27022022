import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardList = styled.span`
  display: flex;
  flexdirection: column;
`
const CardBox = styled.span`
  margin: auto;
  position: relative;
  padding-bottom: 20px;
`
const CardCaption = styled.span`
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  color: var(--color-secondary);

  position: absolute;
  left: 5.88%;
  top: 73.73%;
`
const CardImage = styled.img`
  height: 255px;
  width: 335px;
  border-radius: 10%;
`

function Card({ title, picture }) {
  return (
    <CardList>
      <CardBox>
        <CardImage src={picture} alt="housing" />
        <CardCaption>{title}</CardCaption>
      </CardBox>
    </CardList>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
}

export default Card
