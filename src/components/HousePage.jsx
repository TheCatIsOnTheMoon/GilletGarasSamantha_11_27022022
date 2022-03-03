import styled from 'styled-components'
import { useState } from 'react'
import arrow from '../assets/arrow.svg'

const HouseBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
`
const HouseImgBox = styled.div``

const HouseImg = styled.img`
  height: 255px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`

const HouseTitle = styled.div`
  font-size: 1.2rem;
  color: var(--color-primary);
`

const HouseLocation = styled.div`
  font-size: 1rem;
  color: var(--color-primary);
`
const HouseTags = styled.div`
  display: flex;
  gap: 1rem;
`

const Tag = styled.span`
  height: 1.2rem;
  font-size: 0.625rem;
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border-radius: 5px;
  padding: 0.3rem 0.9rem;
  vertical-align: middle;
  text-align: center;
`
const RatingAndHostBox = styled.div`
  display: flex;
  align-content: space-between;
`
const HouseRating = styled.div`
  margin: auto 0;
`

const HouseHost = styled.div`
  display: flex;
  align-items: flex-end;
`

const HostName = styled.div`
  font-size: 0.95rem;
  line-height: 1.5rem;
  color: var(--color-primary);
  text-align: right;
  word-spacing: 9999rem;
  margin: auto 0;
`
// word-spacing: 9999px; => will break lines on each white space between words

const HostPicture = styled.img`
  border-radius: 100px;
  width: 3rem;
  margin-left: 1rem;
`

const DecriptionAndEquipmentBox = styled.div``

const DetailsBox = styled.details`
  color: var(--color-primary);
  background-color: #f6f6f6;
  margin: 20px 0;
`

const Summary = styled.summary`
  display: flex;
  justify-content: space-between;
  padding: 6px 18px 6px 18px;
  color: var(--color-secondary);
  background-color: var(--color-primary);
  border-radius: 5px;
  cursor: pointer;
`
const DetailsText = styled.div`
  padding: 30px 18px 20px 18px;
  font-size: 1rem;
  line-height: 142.6%;
`
const Arrow = styled.img``

function HousePage({
  id,
  title,
  pictures,
  description,
  hostName,
  hostPicture,
  rating,
  location,
  equipments,
  tags,
}) {
  const [cls, setCls] = useState('rotate0')
  return (
    <HouseBox>
      <style>{`
        .rotate0 {transform: rotate(0deg);}
        .rotate180 {transform: rotate(180deg);}
      `}</style>
      <HouseImgBox>
        <HouseImg src={pictures[0]} alt="house" />
      </HouseImgBox>
      <HouseTitle>{title}</HouseTitle>
      <HouseLocation>{location}</HouseLocation>
      <HouseTags>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </HouseTags>
      <RatingAndHostBox>
        <HouseRating>{rating}</HouseRating>
        <HouseHost>
          <HostName>{hostName}</HostName>
          <HostPicture src={hostPicture} alt="host" />
        </HouseHost>
      </RatingAndHostBox>
      <DecriptionAndEquipmentBox>
        <DetailsBox>
          <Summary
            onClick={() =>
              setCls((cls) => (cls === 'rotate180' ? 'rotate0' : 'rotate180'))
            }
          >
            Description
            <Arrow src={arrow} className={cls} alt="arrow" />
          </Summary>
          <DetailsText>{description}</DetailsText>
        </DetailsBox>
        <DetailsBox>
          <Summary
            onClick={() =>
              setCls((cls) => (cls === 'rotate180' ? 'rotate0' : 'rotate180'))
            }
          >
            Equipements
            <Arrow src={arrow} className={cls} alt="arrow" />
          </Summary>
          <DetailsText>
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </DetailsText>
        </DetailsBox>
      </DecriptionAndEquipmentBox>
    </HouseBox>
  )
}

export default HousePage
