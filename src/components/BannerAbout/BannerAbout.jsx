import './style.css'
import bannerphoto from './banner_about.png'

function BannerAbout() {
  return (
    <div className="banner">
      <img src={bannerphoto} alt="banner" className="banner_img" />
    </div>
  )
}

export default BannerAbout
