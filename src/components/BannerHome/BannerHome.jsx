import './style.css'
import bannerphoto from './banner_home.png'

function BannerHome() {
  return (
    <div className="banner">
      <img src={bannerphoto} alt="banner" className="banner_img" />
      <p className="banner_text">Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default BannerHome
