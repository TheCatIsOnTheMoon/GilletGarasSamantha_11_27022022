import styled from 'styled-components'
import bannerphoto from './banner_home.png'

const BannerBox = styled.div`
  margin: 0 20px;
  margin-bottom: 22px;
  position: relative;
`

const BannerImg = styled.img`
  height: 223px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  @media (max-width: 800px) {
    height: 111px;
  }
`

const BannerText = styled.span`
  font-size: 24px;
  color: var(--color-secondary);
  position: absolute;
  left: 9.6%;
  right: 20%;
  top: 30%;
`

function BannerHome() {
  return (
    <BannerBox>
      <BannerImg src={bannerphoto} alt="photo" />
      <BannerText>Chez vous, partout et ailleurs</BannerText>
    </BannerBox>
  )
}

export default BannerHome
