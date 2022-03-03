import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardList = styled.span`
  display: flex;
  flexdirection: column;
  padding-bottom: 20px;
`
const CardBox = styled(Link)`
  margin: auto;
  position: relative;
  height: 255px;
  width: 335px;
  border-radius: 10%;

  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`
const CardCaption = styled.span`
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

function Card({ id, title, picture }) {
  return (
    <CardList>
      <CardBox to={`/housing/${id}`}>
        <CardImage src={picture} alt="housing" />
        <CardCaption>{title}</CardCaption>
      </CardBox>
    </CardList>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
}

export default Card
