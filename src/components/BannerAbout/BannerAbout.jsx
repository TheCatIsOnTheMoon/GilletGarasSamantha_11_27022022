import styled from 'styled-components'
import bannerphoto from './banner_about.png'

const BannerImg = styled.img`
  height: 223px;
  width: 100%;
  object-fit: cover;
  border-radius: 25px;
`

function BannerAbout() {
  return (
    <div>
      <BannerImg src={bannerphoto} alt="photo" />
    </div>
  )
}

export default BannerAbout
