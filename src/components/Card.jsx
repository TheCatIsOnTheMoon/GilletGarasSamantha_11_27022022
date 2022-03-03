import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardBox = styled.div`
  position: relative;
  margin: auto;
`
const CardLink = styled(Link)`
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

const CardImgBox = styled.div`
  border-radius: 10%;
  height: 340px;
  width: 100%;

  @media (max-width: 800px) {
    height: 255px;
    width: 100%;
  }
`
const CardImage = styled.img`
  height: 340px;
  width: 100%;
  border-radius: 10%;
  object-fit: cover;
  @media (max-width: 800px) {
    height: 255px;
    width: 100%;
  }
`

const CardCaption = styled.span`
  font-size: 1.2rem;
  line-height: 140%;
  color: var(--color-secondary);

  position: absolute;
  left: 6%;
  right: 6%;
  bottom: 6%;
`

function Card({ id, title, picture }) {
  return (
    <CardBox>
      <CardLink to={`/housing/${id}`}>
        <CardImgBox>
          <CardImage src={picture} alt="housing" />
        </CardImgBox>
        <CardCaption>{title}</CardCaption>
      </CardLink>
    </CardBox>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
}

export default Card
